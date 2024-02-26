import { CoreInteractor } from "@core/view/core.interactor";
import { CorePresenter } from "@core/view/core.presenter";
import { CityEntitie } from "@domain/entities/city.entitie";

/**
 * Abstract class representing the output logic for CitySummaryViewComponent.
 * It defines the properties for the city, summary, and map.
 */
export abstract class CompareCitiesOutputLogic {
    compareData!: string;
}

/**
 * Interface representing the input logic for CitySummaryViewComponent.
 * It extends CorePresenter and defines methods for setting location on the map,
 * fetching city data, handling success responses for city data and summaries.
 */
export interface CompareCitiesInputLogic extends CorePresenter {

    /**
     * Fetches data for the specified cityId.
     * @param cityId Unique identifier for the city.
     */
    getCompareCities(cities: string): void;

    /**
     * Handles success response for fetching city data.
     * @param data CityEntitie object containing information about the city.
     */
    successCompareResponse(data: string): void;
}

/**
 * Interface representing the logic for the interactor related to CitySummaryViewComponent.
 * It extends CoreInteractor and defines a method for fetching city data based on cityId.
 */
export interface CompareCitiesInteractorLogic extends CoreInteractor {
    /**
     * Fetches data for the specified cityId.
     * @param cityId Unique identifier for the city.
     */
    getCompareCities(cities: string): void;
}

