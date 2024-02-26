import { Inject, Injectable } from "@angular/core";
import { ListCitiesInputLogic, ListCitiesInteractorLogic } from "../view/model/list-cities.model";
import { GeoDbCitiesUseCase } from "@domain/interfaces/geo-db-cities.interface";

/**
 * ListCitiesInteractor is responsible for handling the business logic
 * related to listing cities. It communicates with the data layer
 * through the GeoDbCitiesUseCase and updates the presenter accordingly.
 */
@Injectable()
export class ListCitiesInteractor implements ListCitiesInteractorLogic {
  private _presenter!: ListCitiesInputLogic;

  /**
   * Constructor for the ListCitiesInteractor.
   * @param _geoDbCitiesUseCase GeoDbCitiesUseCase instance for fetching city data.
   */
  constructor(@Inject('geoDbCitiesUseCaseProvider') private _geoDbCitiesUseCase: GeoDbCitiesUseCase) { }

  /**
   * Sets the presenter for the interactor.
   * @param presenter ListCitiesInputLogic instance representing the presenter.
   */
  setPresenter(presenter: ListCitiesInputLogic): void {
    this._presenter = presenter;
  }

  /**
   * Fetches a list of cities based on the provided country code and limit.
   * Uses the GeoDbCitiesUseCase for interacting with the data layer.
   * Updates the presenter with the received city data.
   * @param countryCode Country code for which cities are requested.
   * @param limit Maximum number of cities to retrieve.
   */
  getCities(countryCode: string, limit: string): void {
    this._geoDbCitiesUseCase.getCities(countryCode, limit).subscribe({
      next: ({ data }) => {
        this._presenter.successCityResponse(data);
      }
    });
  }
}

