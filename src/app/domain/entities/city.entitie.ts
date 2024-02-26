export interface CityEntitie {
  id: number,
  wikiDataId: string,
  city: string,
  name: string,
  country: string,
  countryCode: string,
  region: string,
  population: number,
  longitude: number,
  latitude: number,
  elevationMeters?: number,
  timezone?: string;
}