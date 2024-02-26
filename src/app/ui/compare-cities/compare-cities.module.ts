import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareCitiesViewComponent } from './view/compare-cities-view.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { RouterModule } from '@angular/router';
import { compareCitiesRouting } from './compare-cities.routing';
import { GeoDbCitiesUseCaseProvider } from '@application/providers/geo-db-cities.provider.usecase';
import { ChatGptUseCaseProvider } from '@application/providers/chat-gpt.provider.usecase';
import { CompareCitiesInteractorProvider } from '@application/providers/compare-cities.provider.interactor';
import { CompareCitiesPresenterProvider } from '@application/providers/compare-cities.procider.presenter';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    CompareCitiesViewComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(compareCitiesRouting),
    TranslateModule
  ],
  providers: [
    GeoDbCitiesUseCaseProvider,
    ChatGptUseCaseProvider,
    CompareCitiesPresenterProvider,
    CompareCitiesInteractorProvider
  ]
})
export class CompareCitiesModule { }
