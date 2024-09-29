import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
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
];
