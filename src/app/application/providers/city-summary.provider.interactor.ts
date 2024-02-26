import { Provider } from "@angular/core";
import { CitySummaryInteractor } from "src/app/ui/city-summary/interactor/city-summary.interactor";

export const CitySummaryInteractorProvider: Provider = {
  provide: 'citySummaryInteractorProvider',
  useClass: CitySummaryInteractor
}