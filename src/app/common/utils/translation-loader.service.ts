import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

/**
 * Service for loading translations for ngx-translate.
 */
@Injectable()
export class TranslationLoaderService implements TranslateLoader {

  /**
   * Constructor for the TranslationLoaderService.
   * @param http HTTP client for making requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Retrieves translations for the specified language from a JSON file.
   * @param lang Language code for which translations are requested.
   * @returns Observable emitting the translations for the specified language.
   */
  getTranslation(lang: string): Observable<any> {
    // Assuming translation files are located in the 'assets/i18n' directory.
    return this.http.get(`./assets/i18n/translations.${lang}.json`);
  }
}
