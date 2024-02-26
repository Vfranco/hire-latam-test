import { Component, Inject, OnInit } from '@angular/core';
import { CitySummaryInputLogic, CitySummaryOutputLogic } from './model/city-summary.model';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

/**
 * CitySummaryViewComponent is a view component responsible for displaying
 * the summary of a city. It extends CitySummaryOutputLogic to handle output logic.
 */
@Component({
  selector: 'app-city-summary-view',
  templateUrl: './city-summary-view.component.html',
  styleUrls: ['./city-summary-view.component.scss']
})
export class CitySummaryViewComponent extends CitySummaryOutputLogic implements OnInit {

  /**
   * Constructor for the CitySummaryViewComponent.
   * @param translate TranslateService for managing language translations.
   * @param _presenter CitySummaryInputLogic instance for handling input logic.
   * @param activatedRoute ActivatedRoute for accessing route parameters.
   */
  constructor(
    public translate: TranslateService,
    @Inject('citySummaryPresenterProvider') private _presenter: CitySummaryInputLogic,
    private activatedRoute: ActivatedRoute,
  ) {
    super();
    this._presenter.setView(this);
  }

  /**
   * Lifecycle hook called after component initialization.
   * Invokes the getDataCity method to fetch data for the city summary.
   */
  async ngOnInit(): Promise<void> {
    this.getDataCity();
  }

  /**
   * Fetches data for the city summary based on the cityId from the route parameters.
   */
  getDataCity(): void {
    const cityId = this.activatedRoute.snapshot.params?.['id'];
    this._presenter.getDataCity(cityId);
  }
}

