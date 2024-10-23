import { Routes } from '@angular/router';
import { ClientiComponent } from './clienti.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';

export const CLIENTI_ROUTES: Routes = [
  {
    path: '',
    component: ClientiComponent,
  },
  {
    path: ':codice',
    component: ClienteDetailComponent,
  },
];
