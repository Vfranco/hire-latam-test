import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CitiesResponse, CityResponse } from '@domain/entities/cities-response.entitie';
import { GeoDbCitiesUseCase } from '@domain/interfaces/geo-db-cities.interface';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

/**
 * Service providing methods to interact with the GeoDB Cities API
 * for retrieving information about cities.
 */
@Injectable()
export class GeoDbCitiesService implements GeoDbCitiesUseCase {

  private endpoint = 'v1/geo/cities';

  /**
   * Constructor for the GeoDbCitiesService.
   * @param http HTTP client for making requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Retrieves a list of cities in a specific country based on provided parameters.
   * @param countryCode Country code for which cities are requested.
   * @param limit Maximum number of cities to retrieve.
   * @returns Observable emitting the response containing city information.
   */
  getCities(countryCode: string, limit: string): Observable<CitiesResponse> {
    const params = new HttpParams()
      .set('countryIds', countryCode)
      .set('minPopulation', '100000')
      .set('limit', limit);

    return this.http.get<CitiesResponse>(`${environment.GEO_DB_CITIES_API}/${this.endpoint}`, { params });
  }

  /**
   * Retrieves detailed information about a city based on its ID.
   * @param cityId Unique identifier for the city.
   * @returns Observable emitting the response containing detailed city information.
   */
  getCityDataById(cityId: string): Observable<CityResponse> {
    return this.http.get<CityResponse>(`${environment.GEO_DB_CITIES_API}/${this.endpoint}/${cityId}`);
  }
}

