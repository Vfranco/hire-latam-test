import { Provider } from "@angular/core";
import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslationLoaderService } from "@common/utils/translation-loader.service";

export function createTranslateLoader(http: HttpClient) {
    return new TranslationLoaderService(http);
  }

export const TranslateProvider: Provider = {
  provide: TranslateLoader,
  useFactory: createTranslateLoader,
  deps: [HttpClient]
}