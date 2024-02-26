import { Provider } from "@angular/core";
import { CitySummaryPresenter } from "src/app/ui/city-summary/presenter/city-summary.presenter";

export const CitySummaryPresenterProvider: Provider = {
  provide: 'citySummaryPresenterProvider',
  useClass: CitySummaryPresenter
}