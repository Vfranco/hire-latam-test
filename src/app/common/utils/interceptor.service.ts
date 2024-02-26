import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HTTP_HEADERS } from '@core/enums/http-headers.enum';
import { AlertService } from './alert.service';

/**
 * Interceptor service for modifying HTTP requests by adding custom headers.
 */
@Injectable()
export class InterceptorService implements HttpInterceptor {

  private countRequest = 0

  constructor(
    private alertService: AlertService
  ) { }

  /**
   * Intercepts HTTP requests and adds custom headers before proceeding.
   * @param request HttpRequest to be intercepted.
   * @param next HttpHandler to proceed with the intercepted request.
   * @returns Observable of the HttpEvent.
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders()
      .set(HTTP_HEADERS.xRapidApiKey, environment.X_RAPID_API_KEY)
      .set(HTTP_HEADERS.xRapidApiHost, this.getHostByAPI(request))
      .set(HTTP_HEADERS.cacheControl, 'max-age=3600');

    request = request.clone({
      headers: headers,
    });

    this.alertService.hideAlert();

    return next.handle(request);
  }

  /**
   * Extracts the host from the API endpoint to set the 'x-rapidapi-host' header.
   * @param request HttpRequest from which the host is extracted.
   * @returns The host extracted from the API endpoint.
   */
  private getHostByAPI(request: HttpRequest<any>): string {
    return request.url.replace(/^https?:\/\//, '');
  }
}

