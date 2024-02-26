import { Component, Inject, OnInit } from '@angular/core';
import { CompareCitiesInputLogic, CompareCitiesOutputLogic } from './model/compare-cities.model';
import { ActivatedRoute } from '@angular/router';

/**
 * @file CompareCitiesViewComponent
 * @module Components
 * @description
 * The `CompareCitiesViewComponent` is a presentation component responsible for displaying
 * the compared city information on the user interface.
 *
 * @extends CompareCitiesOutputLogic
 * @implements OnInit
 * @exports CompareCitiesViewComponent
 * @injects CompareCitiesInputLogic
 */
@Component({
  selector: 'app-compare-cities-view',
  templateUrl: './compare-cities-view.component.html',
  styleUrls: ['./compare-cities-view.component.scss']
})
export class CompareCitiesViewComponent extends CompareCitiesOutputLogic implements OnInit {

  /**
   * Constructor of the CompareCitiesViewComponent.
   * @constructor
   * @param _presenter - An instance of CompareCitiesInputLogic for handling user interface interactions.
   * @param activatedRoute - ActivatedRoute service to retrieve route parameters.
   */
  constructor(
    @Inject('compareCitiesPresenterProvider') private _presenter: CompareCitiesInputLogic,
    private activatedRoute: ActivatedRoute,
  ) {
    super();
    this._presenter.setView(this);
  }

  /**
   * Lifecycle hook that is called after Angular has initialized all data-bound properties
   * of a directive. Invoked immediately after the constructor.
   * @async
   * @returns Promise<void>
   */
  async ngOnInit(): Promise<void> {
    this.getCompareCities();
  }

  /**
   * Retrieves the city IDs from the route parameters and initiates the process of comparing cities.
   * @returns void
   */
  getCompareCities(): void {
    const cities = this.activatedRoute.snapshot.params?.['cities'];
    this._presenter.getCompareCities(cities);
  }

}
