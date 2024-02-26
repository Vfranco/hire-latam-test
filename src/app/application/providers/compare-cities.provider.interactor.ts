import { Provider } from "@angular/core";
import { CompareCitiesInteractor } from "src/app/ui/compare-cities/interactor/compare-cities.interactor";

export const CompareCitiesInteractorProvider: Provider = {
  provide: 'compareCitiesInteractorProvider',
  useClass: CompareCitiesInteractor
}