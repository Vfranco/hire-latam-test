import { Provider } from "@angular/core";
import { ListCitiesInteractor } from "src/app/ui/list-cities/interactor/list-cities.interactor";

export const ListCitiesInteractorProvider: Provider = {
  provide: 'listCitiesInteractorProvider',
  useClass: ListCitiesInteractor
}