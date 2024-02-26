import { Inject, Injectable } from "@angular/core";
import { CitySummaryInputLogic, CitySummaryInteractorLogic } from "../view/model/city-summary.model";
import { GeoDbCitiesUseCase } from "@domain/interfaces/geo-db-cities.interface";
import { ChatGptUseCase } from "@domain/interfaces/chat-gpt.interface";
import { switchMap } from "rxjs";

/**
 * CitySummaryInteractor is responsible for handling the business logic
 * related to fetching data for the city summary. It communicates with the
 * data layer through GeoDbCitiesUseCase and ChatGptUseCase, and updates
 * the presenter accordingly.
 */
@Injectable()
export class CitySummaryInteractor implements CitySummaryInteractorLogic {

  private _presenter!: CitySummaryInputLogic;

  /**
   * Constructor for the CitySummaryInteractor.
   * @param _geoDbCitiesUseCase GeoDbCitiesUseCase instance for fetching city data.
   * @param _chatGptUseCase ChatGptUseCase instance for generating city summaries.
   */
  constructor(
    @Inject('geoDbCitiesUseCaseProvider') private _geoDbCitiesUseCase: GeoDbCitiesUseCase,
    @Inject('chatGptUseCaseProvider') private _chatGptUseCase: ChatGptUseCase
  ) {}

  /**
   * Sets the presenter for the interactor.
   * @param presenter CitySummaryInputLogic instance representing the presenter.
   */
  setPresenter(presenter: CitySummaryInputLogic): void {
    this._presenter = presenter;
  }

  /**
   * Fetches data for the city based on the provided cityId.
   * Uses GeoDbCitiesUseCase to get city data and ChatGptUseCase to generate
   * a summary. Updates the presenter with the received data and summary.
   * @param cityId Unique identifier for the city.
   */
  getDataCity(cityId: string): void {
    this._geoDbCitiesUseCase.getCityDataById(cityId).pipe(
      switchMap(({data}) => {
        this._presenter.successCityResponse(data);
        return this._chatGptUseCase.getSummaryCity(data);
      }),
    ).subscribe(summaryData => {
      this._presenter.successCitySummary(summaryData.text);
    });
  }
}

