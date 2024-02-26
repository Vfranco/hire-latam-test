import { Observable } from "rxjs";
import { CityEntitie } from "@domain/entities/city.entitie";
import { ChatGptResponse } from "@domain/entities/chat-gpt-response.entitie";

export interface ChatGptUseCase {
    getSummaryCity(city: CityEntitie): Observable<ChatGptResponse>
    getCompareCities(cities: string[]): Observable<ChatGptResponse>
}
