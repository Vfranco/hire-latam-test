import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from '@common/utils/alert.service';
import { AVAILABLE_LANGUAGES } from '@core/enums/available-languages.enum';
import { AlertData } from '@domain/interfaces/alert-data.type';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

/**
 * The root component of the Angular application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  /**
   * Holds the data of the currently displayed alert or null if no alert is present.
   */
  public alertData!: AlertData | null;

  public isLoading!: boolean;

  // Create a Subscription object to manage multiple subscriptions
  private subscriptions = new Subscription();

  /**
   * Constructor for the AppComponent.
   * @param translate TranslateService for managing language translations.
   * @param _alertService AlertService for managing application-wide alerts.
   */
  constructor(
    private _translate: TranslateService,
    private _alertService: AlertService
  ) { }

  /**
   * Initializes the component. Sets the default and current language, and subscribes
   * to the alertObservable to update the alertData when an alert is shown.
   */
  ngOnInit(): void {
    this.setLanguage();
    this.subscribeAlertData();
  }

  /**
   * Sets the default and current language using the TranslateService.
   */
  setLanguage() {
    this._translate.setDefaultLang(AVAILABLE_LANGUAGES.EN);
    this._translate.use(AVAILABLE_LANGUAGES.EN);
  }

  /**
   * Subscribes to the alertObservable from the AlertService to update the alertData.
   */
  subscribeAlertData() {
    // Add the subscription to the Subscription object
    this.subscriptions.add(this._alertService.alertObservable.subscribe(data => {
      this.alertData = data;
    }));
  }

  /**
   * Hides the currently displayed alert using the AlertService.
   */
  hideAlert() {
    this._alertService.hideAlert();
  }

  /**
   * Cleans up subscriptions when the component is destroyed.
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions in the Subscription object
    this.subscriptions.unsubscribe();
  }
}

