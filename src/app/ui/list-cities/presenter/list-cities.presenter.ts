import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ListCitiesInputLogic, ListCitiesInteractorLogic, ListCitiesOutputLogic } from "../view/model/list-cities.model";
import { CityEntitie } from "@domain/entities/city.entitie";

/**
 * ListCitiesPresenter is responsible for handling the presentation logic
 * for listing cities. It acts as a bridge between the view (component),
 * interactor (business logic), and the data entities.
 */
@Injectable()
export class ListCitiesPresenter implements ListCitiesInputLogic {
  private _view!: ListCitiesOutputLogic;

  /**
   * Constructor for the ListCitiesPresenter.
   * @param _interactor ListCitiesInteractorLogic instance for handling business logic.
   * @param _router Angular Router for navigation.
   */
  constructor(
    @Inject('listCitiesInteractorProvider') private _interactor: ListCitiesInteractorLogic,
    private _router: Router,
  ) {
    this._interactor.setPresenter(this);
  }

  /**
   * Sets the view component for the presenter.
   * @param component ListCitiesOutputLogic instance representing the view.
   */
  setView(component: ListCitiesOutputLogic): void {
    this._view = component;
  }

  /**
   * Fetches a list of cities based on the provided country code and limit.
   * Delegates the task to the interactor.
   * @param countryCode Country code for which cities are requested.
   * @param limit Maximum number of cities to retrieve.
   */
  getCities(countryCode: string, limit: string): void {
    this._interactor.getCities(countryCode, limit);
  }

  /**
   * Handles the success response when cities are successfully fetched.
   * Updates the view with the received list of cities.
   * @param response Array of CityEntitie objects representing the list of cities.
   */
  successCityResponse(response: CityEntitie[]): void {
    this._view.listCities = response;
  }

  /**
   * Navigates to the city detail view based on the provided cityId.
   * Uses the Angular Router for navigation.
   * @param cityId Unique identifier for the city.
   */
  goToCityDetail(cityId: string): void {
    this._router.navigate([`city-summary/${cityId}`]);
  }

  /**
   * Navigates to the compare cities view based on the selected cities.
   * Uses the Angular Router for navigation.
   */
  goToCompareCities(): void {
    const idList = this._view.selectedCities.map(city => `${city.name} ${city.region} ${city.country} `);
    this._router.navigate([`compare-cities/${idList.toString()}`]);
  }

  /**
   * Checks if a city is active (fillable) based on the selected cities count.
   * @param city CityEntitie to check.
   * @returns True if the city is active, false otherwise.
   */
  getActive(city: CityEntitie): boolean {
    const isFill = this._view.selectedCities.length === 2;
    if (isFill) {
      return !this._view.selectedCities.some(el => el.id === city.id);
    }
    return false;
  }

  /**
   * Adds or removes a city from the selected cities list.
   * @param city CityEntitie to add or remove.
   */
  checkCity(city: CityEntitie): void {
    const foundCity = this._view.selectedCities.some(el => el.id === city.id);
    if (!foundCity) {
      this._view.selectedCities.push(city);
    } else {
      this._view.selectedCities = this._view.selectedCities.filter(el => el.id !== city.id);
    }
  }
}
