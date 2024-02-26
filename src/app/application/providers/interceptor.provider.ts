import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";
import { InterceptorService } from "@common/utils/interceptor.service";

export const InterceptorProvider: Provider = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
]