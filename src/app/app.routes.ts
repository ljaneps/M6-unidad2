import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'form',
    loadComponent: () => import('./components/formulario/formulario.component').then(m => m.FormularioComponent)
  },
  {
    path: 'tabla',
    loadComponent: () => import('./components/tabla/tabla.component').then(m => m.TablaComponent)
  }
];
