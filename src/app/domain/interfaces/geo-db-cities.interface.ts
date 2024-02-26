import { CitiesResponse, CityResponse } from "@domain/entities/cities-response.entitie";
import { Observable } from "rxjs";

export interface GeoDbCitiesUseCase {
  getCities(countryCode: string, limit: string): Observable<CitiesResponse>
  getCityDataById(cityId: string): Observable<CityResponse>
}
