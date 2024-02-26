import { CityEntitie } from "./city.entitie";

export interface CitiesResponse {
    data: CityEntitie[],
    links: Links,
    metadata: Metadata
}

export interface CityResponse {
    data: CityEntitie
}

export interface Links {
    rel: string,
    href: string
}

export interface Metadata {
    currentOffset: number, 
    totalCount: number
}