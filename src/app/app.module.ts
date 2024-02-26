import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorProvider } from '@application/providers/interceptor.provider';
import { ErrorHandlerInterceptorProvider } from '@application/providers/error-handler-interceptor.provider';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateProvider } from '@application/providers/translate.provider';

/**
 * AppModule is the root module of the Angular application.
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({ loader: TranslateProvider }),
  ],
  providers: [
    InterceptorProvider, 
    ErrorHandlerInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

