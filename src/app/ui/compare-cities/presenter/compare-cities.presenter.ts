import { Inject, Injectable } from "@angular/core";
import { CompareCitiesInputLogic, CompareCitiesInteractorLogic, CompareCitiesOutputLogic } from "../view/model/compare-cities.model";

/**
 * @file CompareCitiesPresenter
 * @module Presenters
 * @description
 * The `CompareCitiesPresenter` class acts as a mediator between the interactor
 * (business logic) and the view (presentation layer) to handle the user interface
 * interactions related to comparing information about multiple cities.
 *
 * @implements CompareCitiesInputLogic
 * @exports CompareCitiesPresenter
 * @injects CompareCitiesInteractorLogic
 */
@Injectable()
export class CompareCitiesPresenter implements CompareCitiesInputLogic {

  /**
   * Reference to the view component that will display the compared city information.
   * @private
   */
  private _view!: CompareCitiesOutputLogic;

  /**
   * Constructor of the CompareCitiesPresenter.
   * @constructor
   * @param _interactor - An instance of CompareCitiesInteractorLogic for handling business logic.
   */
  constructor(
    @Inject('compareCitiesInteractorProvider') private _interactor: CompareCitiesInteractorLogic
  ) {
    this._interactor.setPresenter(this);
  }

  /**
   * Sets the view component for this presenter to enable communication with the user interface.
   * @param component - The view component to be set.
   * @returns void
   */
  setView(component: CompareCitiesOutputLogic): void {
    this._view = component;
  }

  /**
   * Initiates the process of comparing information about multiple cities.
   * @param cities - A comma-separated string of city IDs to be compared.
   * @returns void
   */
  getCompareCities(cities: string): void {
    this._interactor.getCompareCities(cities);
  }

  /**
   * Handles the successful response from the interactor and updates the view with compared city data.
   * @param data - The compared city information in string format.
   * @returns void
   */
  successCompareResponse(data: string): void {
    this._view.compareData = data;
  }

}

