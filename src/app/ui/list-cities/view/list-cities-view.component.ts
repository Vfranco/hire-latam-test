import { Component, Inject, OnInit } from '@angular/core';
import { ListCitiesInputLogic, ListCitiesOutputLogic } from './model/list-cities.model';
import { TranslateService } from '@ngx-translate/core';
import { COUNTRIES } from '@core/enums/countries.enum';
import { CityEntitie } from '@domain/entities/city.entitie';

/**
 * ListCitiesViewComponent is a view component responsible for displaying a list of cities.
 * It extends ListCitiesOutputLogic to handle the output logic related to listing cities.
 */
@Component({
  selector: 'app-list-cities-view',
  templateUrl: './list-cities-view.component.html',
  styleUrls: ['./list-cities-view.component.scss']
})
export class ListCitiesViewComponent extends ListCitiesOutputLogic implements OnInit {

  /**
   * Constructor for the ListCitiesViewComponent.
   * @param translate TranslateService for managing language translations.
   * @param _presenter ListCitiesInputLogic instance for handling input logic.
   */
  constructor(
    public translate: TranslateService,
    @Inject('listCitiesPresenterProvider') private _presenter: ListCitiesInputLogic,
  ) {
    super();
    this._presenter.setView(this);
  }

  /**
   * Lifecycle hook called after component initialization.
   * Invokes the getCities method to fetch the list of cities.
   */
  ngOnInit(): void {
    this.getCities();
  }

  get notFill(): boolean {
    return this.selectedCities.length < 2;
  }

  getActive(city: CityEntitie): boolean {
    return this._presenter.getActive(city)
  }

  checkCity(city: CityEntitie) {
    this._presenter.checkCity(city);
  }

  /**
   * Invokes the getCities method from the presenter to fetch the list of cities.
   */
  getCities(value: string = '10'): void {
    this._presenter.getCities(COUNTRIES.US, value);
  }

  /**
   * Navigates to the city detail view based on the provided cityId.
   * @param cityId Unique identifier for the city.
   */
  goToCityDetail(cityId: string): void {
    this._presenter.goToCityDetail(cityId);
  }

  goToCompareCities(): void {
    this._presenter.goToCompareCities();
  }

}
