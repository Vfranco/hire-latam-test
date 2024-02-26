import { CoreInteractor } from "@core/view/core.interactor";
import { CorePresenter } from "@core/view/core.presenter";
import { CityEntitie } from "@domain/entities/city.entitie";
import * as mapboxgl from 'mapbox-gl';

/**
 * Abstract class representing the output logic for CitySummaryViewComponent.
 * It defines the properties for the city, summary, and map.
 */
export abstract class CitySummaryOutputLogic {
    city!: CityEntitie;
    summaryCity!: string;
    map!: mapboxgl.Map;
}

/**
 * Interface representing the input logic for CitySummaryViewComponent.
 * It extends CorePresenter and defines methods for setting location on the map,
 * fetching city data, handling success responses for city data and summaries.
 */
export interface CitySummaryInputLogic extends CorePresenter {
    /**
     * Sets the location on the map for the specified city.
     * @param city CityEntitie object containing information about the city.
     * @returns A Promise that resolves when the location is set on the map.
     */
    setLocationMap(city: CityEntitie): Promise<void>;

    /**
     * Fetches data for the specified cityId.
     * @param cityId Unique identifier for the city.
     */
    getDataCity(cityId: string): void;

    /**
     * Handles success response for fetching city data.
     * @param data CityEntitie object containing information about the city.
     */
    successCityResponse(data: CityEntitie): void;

    /**
     * Handles success response for fetching city summary.
     * @param summary String containing the summary information about the city.
     */
    successCitySummary(summary: string): void;
}

/**
 * Interface representing the logic for the interactor related to CitySummaryViewComponent.
 * It extends CoreInteractor and defines a method for fetching city data based on cityId.
 */
export interface CitySummaryInteractorLogic extends CoreInteractor {
    /**
     * Fetches data for the specified cityId.
     * @param cityId Unique identifier for the city.
     */
    getDataCity(cityId: string): void;
}

