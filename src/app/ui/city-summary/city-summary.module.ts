import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitySummaryViewComponent } from './view/city-summary-view.component';
import { RouterModule } from '@angular/router';
import { citySummaryRouting } from './city-summary.routing';
import { CitySummaryInteractorProvider } from '@application/providers/city-summary.provider.interactor';
import { CitySummaryPresenterProvider } from '@application/providers/city-summary.provider.presenter';
import { GeoDbCitiesUseCaseProvider } from '@application/providers/geo-db-cities.provider.usecase';
import { ChatGptUseCaseProvider } from '@application/providers/chat-gpt.provider.usecase';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CitySummaryViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(citySummaryRouting),
    ComponentsModule,
    TranslateModule
  ],
  providers: [
    CitySummaryInteractorProvider,
    CitySummaryPresenterProvider,
    GeoDbCitiesUseCaseProvider,
    ChatGptUseCaseProvider
  ]
})
export class CitySummaryModule { }
