import { Inject, Injectable } from "@angular/core";
import { CitySummaryInputLogic, CitySummaryInteractorLogic, CitySummaryOutputLogic } from "../view/model/city-summary.model";
import { mapConfig } from "@core/constants/map-config.const";
import { CityEntitie } from "@domain/entities/city.entitie";
import { MAP_POSITIONS } from "@core/enums/map-positons.enum";
import * as mapboxgl from 'mapbox-gl';

/**
 * CitySummaryPresenter is responsible for handling the presentation logic
 * for the city summary view. It acts as a bridge between the view (component),
 * interactor (business logic), and the data entities.
 */
@Injectable()
export class CitySummaryPresenter implements CitySummaryInputLogic {
  private _view!: CitySummaryOutputLogic;

  /**
   * Constructor for the CitySummaryPresenter.
   * @param _interactor CitySummaryInteractorLogic instance for handling business logic.
   */
  constructor(
    @Inject('citySummaryInteractorProvider') private _interactor: CitySummaryInteractorLogic
  ) {
    this._interactor.setPresenter(this);
  }

  /**
   * Sets the view component for the presenter.
   * @param component CitySummaryOutputLogic instance representing the view.
   */
  setView(component: CitySummaryOutputLogic): void {
    this._view = component;
  }

  /**
   * Fetches data for the city based on the provided cityId.
   * Delegates the task to the interactor.
   * @param cityId Unique identifier for the city.
   */
  getDataCity(cityId: string): void {
    this._interactor.getDataCity(cityId);
  }

  /**
   * Handles the success response when city data is successfully fetched.
   * Updates the view with the received city data and sets the location on the map.
   * @param data CityEntitie object representing the city data.
   */
  successCityResponse(data: CityEntitie): void {
    this._view.city = data;
    this.setLocationMap(data);
  }

  /**
   * Handles the success response when the city summary is successfully fetched.
   * Updates the view with the received city summary.
   * @param summary String representing the city summary.
   */
  successCitySummary(summary: string): void {
    this._view.summaryCity = summary;
  }

  /**
   * Sets the location on the map based on the provided city data.
   * @param data CityEntitie object representing the city data.
   */
  async setLocationMap(data: CityEntitie): Promise<void> {
    const locationCoord = [data.longitude, data.latitude] as mapboxgl.LngLatLike;
    this._view.map = new mapboxgl.Map({ ...mapConfig, center: locationCoord });
    this.setLocationMarker(locationCoord, data);
    this.setControls();
  }

  /**
   * Sets a marker on the map at the provided location coordinates.
   * Associates a popup with information about the city.
   * @param locationCoord Coordinates for placing the marker on the map.
   * @param data CityEntitie object representing the city data.
   */
  setLocationMarker(locationCoord: mapboxgl.LngLatLike, data: CityEntitie) {
    const marker = new mapboxgl.Marker()
      .setLngLat(locationCoord)
      .addTo(this._view.map);
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML(this.createPopupContent(data));
    marker.setPopup(popup).togglePopup();
  }

  /**
   * Sets map controls including navigation control, fullscreen control, and geolocate control.
   */
  setControls() {
    this._view.map.addControl(new mapboxgl.NavigationControl(), MAP_POSITIONS.topRight);
    this._view.map.addControl(new mapboxgl.FullscreenControl());
    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
    });

    this._view.map.addControl(geolocateControl, MAP_POSITIONS.topRight);
  }

  /**
   * Creates HTML content for the popup associated with the map marker.
   * Includes information about the city.
   * @param data CityEntitie object representing the city data.
   * @returns HTML string for the popup content.
   */
  createPopupContent(data: CityEntitie): string {
    return `<h6><strong>City:</strong> ${data.city}</h6>
            <hr>
            <span><strong>Population:</strong> ${data.population}</span>
            <br>
            <span><strong>Region:</strong> ${data.region}</span>
            <br>
            <span><strong>Elevation Meters:</strong> ${data.elevationMeters}</span>
            <br>
            <span><strong>Timezone:</strong> ${data.timezone}</span>
            `;
  }
}
