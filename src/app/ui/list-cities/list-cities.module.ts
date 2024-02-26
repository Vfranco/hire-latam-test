import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { listCitiesRouting } from './list-cities.routing';
import { ListCitiesViewComponent } from './view/list-cities-view.component';
import { RouterModule } from '@angular/router';
import { ListCitiesInteractorProvider } from '@application/providers/list-cities.provider.interactor';
import { ListCitiesPresenterProvider } from '@application/providers/list-citites.provider.presenter';
import { GeoDbCitiesUseCaseProvider } from '@application/providers/geo-db-cities.provider.usecase';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ListCitiesViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(listCitiesRouting),
    FormsModule,
    ComponentsModule,
    TranslateModule
  ],
  providers: [
    ListCitiesInteractorProvider,
    ListCitiesPresenterProvider,
    GeoDbCitiesUseCaseProvider
  ]
})
export class ListCitiesModule { }
