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
        loadComponent: () => import('./pages/clienti/clienti.component'),
      },
      {
        path: 'fatture',
        loadComponent: () => import('./pages/fatture/fatture.component'),
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
