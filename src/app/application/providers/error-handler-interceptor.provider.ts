import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";
import { ErrorHandlerInterceptor } from "@common/utils/error-handler.interceptor.service";

export const ErrorHandlerInterceptorProvider: Provider = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }
]