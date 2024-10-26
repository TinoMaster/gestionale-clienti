import { Routes } from '@angular/router';
import { ClientiComponent } from './clienti.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { NewClientComponent } from './new-client/new-client.component';

export const CLIENTI_ROUTES: Routes = [
  {
    path: '',
    component: ClientiComponent,
  },
  {
    path: 'nuovo',
    component: NewClientComponent,
  },
  {
    path: ':codice',
    component: ClienteDetailComponent,
  },
];
