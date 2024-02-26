import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UIRouting } from './ui-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(UIRouting)
  ]
})
export class UIModule { }
