import { Routes } from '@angular/router';
import { Form } from './form/form';
import { Res } from './res/res';

export const routes: Routes = [
  { path: 'formulaire', component: Form },
  { path: 'resultat', component: Res },
  { path: '', redirectTo: 'formulaire', pathMatch: 'full' },
  { path: '**', redirectTo: 'formulaire' }
];
