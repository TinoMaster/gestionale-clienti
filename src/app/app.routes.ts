import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./common/components/layout/layout.component'),
    children: [
      {
        path: 'inizio',
        loadComponent: () => import('./pages/inizio/inizio.component'),
      },
      {
        path: 'clienti',
        loadChildren: () =>
          import('./pages/clienti/clienti.routes').then(
            (m) => m.CLIENTI_ROUTES
          ),
      },
      {
        path: 'fatture',
        loadChildren: () =>
          import('./pages/fatture/fatture.routes').then(
            (m) => m.FATTURE_ROUTES
          ),
      },
      {
        path: '',
        redirectTo: 'inizio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
