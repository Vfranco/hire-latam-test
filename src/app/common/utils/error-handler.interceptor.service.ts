import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from './alert.service';
import { ALERT_DATA } from '@core/enums/alert-data.enum';

/**
 * Interceptor for handling HTTP errors and displaying corresponding alerts.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(
    private alertService: AlertService
    ) { }

  /**
   * Intercepts HTTP requests and handles errors by displaying alerts.
   * @param request HttpRequest to be intercepted.
   * @param next HttpHandler to proceed with the intercepted request.
   * @returns Observable of the HttpEvent.
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(({ error }: HttpErrorResponse) => {
        this.handleErrorType(error);
        return throwError(error);
      })
    );
  }

  /**
   * Handles different types of errors and displays corresponding alerts.
   * @param error The error object received from the HTTP response.
   */
  private handleErrorType(error: any): void {
    const message = error?.errors ? error?.errors[0]?.message : error.message;
    this.alertService.showAlert({
      type: ALERT_DATA.danger,
      message,
    });
  }
}


