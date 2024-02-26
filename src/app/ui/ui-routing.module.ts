import { Routes } from "@angular/router";

export const UIRouting: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('./list-cities/list-cities.module').then(m => m.ListCitiesModule) },
      { path: 'city-summary/:id', loadChildren: () => import('./city-summary/city-summary.module').then(m => m.CitySummaryModule) },
      { path: 'compare-cities/:cities', loadChildren: () => import('./compare-cities/compare-cities.module').then(m => m.CompareCitiesModule) },
    ]
  }
]

