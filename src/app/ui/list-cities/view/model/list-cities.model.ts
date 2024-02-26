import { CityEntitie } from "@domain/entities/city.entitie";
import { CorePresenter } from '@core/view/core.presenter';
import { CoreInteractor } from '@core/view/core.interactor';

/**
 * Abstract class serving as the output logic for listing cities.
 * It contains a property to store the list of cities and the number of records per page.
 */
export abstract class ListCitiesOutputLogic {
    listCities!: CityEntitie[];
    selectedCities: CityEntitie[] = [];
    recordsPerPage: number = 10;
}

/**
 * Interface defining the input logic for listing cities.
 * It extends the CorePresenter interface.
 */
export interface ListCitiesInputLogic extends CorePresenter {
    /**
     * Fetches a list of cities based on the provided country code and limit.
     * @param countryCode Country code for which cities are requested.
     * @param limit Maximum number of cities to retrieve.
     */
    getCities(countryCode: string, limit: string): void;

    /**
     * Handles the success response when cities are successfully fetched.
     * @param response Array of CityEntitie objects representing the list of cities.
     */
    successCityResponse(response: CityEntitie[]): void;

    /**
     * Navigates to the city detail view based on the provided cityId.
     * @param cityId Unique identifier for the city.
     */
    goToCityDetail(cityId: string): void;

    goToCompareCities(): void;


    getActive(city: CityEntitie): boolean

    checkCity(city: CityEntitie): void
}

/**
 * Interface defining the interactor logic for listing cities.
 * It extends the CoreInteractor interface.
 */
export interface ListCitiesInteractorLogic extends CoreInteractor {
    /**
     * Fetches a list of cities based on the provided country code and limit.
     * @param countryCode Country code for which cities are requested.
     * @param limit Maximum number of cities to retrieve.
     */
    getCities(countryCode: string, limit: string): void;
}
