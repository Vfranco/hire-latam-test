import { Inject, Injectable } from "@angular/core";
import { CompareCitiesInputLogic, CompareCitiesInteractorLogic } from "../view/model/compare-cities.model";
import { GeoDbCitiesUseCase } from "@domain/interfaces/geo-db-cities.interface";
import { ChatGptUseCase } from "@domain/interfaces/chat-gpt.interface";

/**
 * @file CompareCitiesInteractor
 * @module Interactors
 * @description
 * The `CompareCitiesInteractor` class is responsible for coordinating the interaction
 * between the view (presentation layer) and the data layer to handle the logic
 * related to comparing information about multiple cities.
 *
 * This interactor communicates with the GeoDbCitiesUseCase for retrieving basic
 * city data and the ChatGptUseCase for generating a comparative summary using
 * natural language processing.
 *
 * @implements CompareCitiesInteractorLogic
 * @exports CompareCitiesInteractor
 * @injects GeoDbCitiesUseCase, ChatGptUseCase
 */
@Injectable()
export class CompareCitiesInteractor implements CompareCitiesInteractorLogic {

  /**
   * Reference to the presenter that will handle the output and interaction with the view.
   * @private
   */
  private _presenter!: CompareCitiesInputLogic;

  /**
   * Constructor of the CompareCitiesInteractor.
   * @constructor
   * @param _geoDbCitiesUseCase - An instance of GeoDbCitiesUseCase to retrieve city data.
   * @param _chatGptUseCase - An instance of ChatGptUseCase to generate comparative summaries.
   */
  constructor(
    @Inject('geoDbCitiesUseCaseProvider') private _geoDbCitiesUseCase: GeoDbCitiesUseCase,
    @Inject('chatGptUseCaseProvider') private _chatGptUseCase: ChatGptUseCase
  ) {}

  /**
   * Sets the presenter for this interactor, enabling communication with the view.
   * @param presenter - The presenter to be set.
   * @returns void
   */
  setPresenter(presenter: CompareCitiesInputLogic): void {
    this._presenter = presenter;
  }

  /**
   * Retrieves and compares information about multiple cities using natural language processing.
   * @param cities - A comma-separated string of city IDs to be compared.
   * @returns void
   */
  getCompareCities(cities: string): void {
    this._chatGptUseCase.getCompareCities(cities.split(',')).subscribe({
      next: (response) => {
        this._presenter.successCompareResponse(response.text);
      }
    })
  }
}
