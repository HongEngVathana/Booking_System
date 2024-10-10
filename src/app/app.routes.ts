import { Routes } from '@angular/router';

import { SearchComponent } from './pages/search/search.component';
import { HomeComponentn } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponentn,
  },
  {
    path: 'search/:fromStationId/:toStationId/:dateOfTravel',
    component: SearchComponent,
  },
];
