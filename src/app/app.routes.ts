import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inizio',
    pathMatch: 'full',
  },
  {
    path: 'inizio',
    component: HomeComponent,
  },
  {
    path: 'clienti',
    loadChildren: () =>
      import('./clienti/clienti.routes').then((m) => m.CLIENTI_ROUTES),
  },
  {
    path: 'fatture',
    loadChildren: () =>
      import('./fatture/fatture.routes').then((m) => m.FATTURE_ROUTES),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
