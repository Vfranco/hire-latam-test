import { Provider } from "@angular/core";
import { ListCitiesPresenter } from "src/app/ui/list-cities/presenter/list-cities.presenter";

export const ListCitiesPresenterProvider: Provider = {
  provide: 'listCitiesPresenterProvider',
  useClass: ListCitiesPresenter
}