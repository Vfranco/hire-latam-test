import { Provider } from "@angular/core";
import { CompareCitiesPresenter } from "src/app/ui/compare-cities/presenter/compare-cities.presenter";

export const CompareCitiesPresenterProvider: Provider = {
  provide: 'compareCitiesPresenterProvider',
  useClass: CompareCitiesPresenter
}