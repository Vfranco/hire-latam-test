import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [
  { path: '', loadChildren: () => import('./ui/ui.module').then(m => m.UIModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
