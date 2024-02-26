import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';

/**
 * ComponentsModule is a feature module that encapsulates reusable components
 * for use across the application.
 */
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }

