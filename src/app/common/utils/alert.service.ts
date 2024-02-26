import { Injectable } from '@angular/core';
import { AlertData } from '@domain/interfaces/alert-data.type';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Service providing methods for managing application-wide alerts.
 */
@Injectable({
  providedIn: 'root',
})
export class AlertService {

  /**
   * Subject holding the current alert data, initialized with null.
   * BehaviorSubject is used to emit the current alert and maintain its state.
   */
  private alertSubject: BehaviorSubject<AlertData | null> = new BehaviorSubject<AlertData | null>(null);

  /**
   * Observable property exposing the alertSubject as an observable.
   * Subscribers can receive updates whenever the alert changes.
   */
  get alertObservable(): Observable<AlertData | null> {
    return this.alertSubject.asObservable();
  }

  /**
   * Displays an alert with the provided data.
   * @param data AlertData object containing information about the alert.
   */
  showAlert(data: AlertData) {
    this.alertSubject.next(data);
  }

  /**
   * Hides the currently displayed alert by setting the alert data to null.
   */
  hideAlert() {
    this.alertSubject.next(null);
  }
}


