import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CHAT_GPT_ROLES } from '@core/enums/chat-gpt-roles.enum';
import { getComparePrompt, getSummaryPrompt } from '@core/functions/prompt.functions';
import { ChatGptResponse } from '@domain/entities/chat-gpt-response.entitie';
import { CityEntitie } from '@domain/entities/city.entitie';
import { ChatGptUseCase } from '@domain/interfaces/chat-gpt.interface';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

/**
 * Service providing methods to interact with the GPT language model
 * for obtaining summaries about cities and city comparisons.
 */
@Injectable()
export class ChatGptService implements ChatGptUseCase {

  /**
   * Constructor for the ChatGptService.
   * @param http HTTP client for making requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Retrieves a summary about the provided city using the GPT language model.
   * @param dataCity City data for which the summary is requested.
   * @returns Observable emitting the GPT language model response.
   */
  getSummaryCity(dataCity: CityEntitie): Observable<ChatGptResponse> {
    return this.http.post<ChatGptResponse>(environment.CHAT_GPT_API, this.getSummaryPrompt(dataCity));
  }

  /**
   * Retrieves a detailed comparison between two cities using the GPT language model.
   * @param cities Array of city IDs to compare.
   * @returns Observable emitting the GPT language model response for the comparison.
   */
  getCompareCities(cities: string[]): Observable<ChatGptResponse> {
    return this.http.post<ChatGptResponse>(environment.CHAT_GPT_API, this.getComparePrompt(cities));
  }

  /**
   * Constructs and returns the prompt required to obtain a city summary.
   * @param dataCity City data for which the summary is requested.
   * @returns Array containing the prompt in the appropriate format for the GPT model.
   */
  private getSummaryPrompt(dataCity: CityEntitie): any {
    const prompt = getSummaryPrompt(dataCity);
    return [{ content: prompt, role: CHAT_GPT_ROLES.user }];
  }

  /**
   * Constructs and returns the prompt required to obtain a detailed comparison between two cities.
   * @param cities Array of city IDs to compare.
   * @returns Array containing the prompt in the appropriate format for the GPT model.
   */
  private getComparePrompt(cities: string[]) {
    const prompt = getComparePrompt(cities);
    return [{ content: prompt, role: CHAT_GPT_ROLES.user }];
  }
}

