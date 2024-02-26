import { Provider } from "@angular/core";
import { GeoDbCitiesService } from "@application/services/geo-db-cities.service";

export const GeoDbCitiesUseCaseProvider: Provider = {
  provide: 'geoDbCitiesUseCaseProvider',
  useClass: GeoDbCitiesService
}