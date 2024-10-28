import { Routes } from '@angular/router';
import { PizzaKitListComponent } from './pages/pizza-kit-list/pizza-kit-list.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/pizza-kit-list/pizza-kit-list.component').then(m => m.PizzaKitListComponent),
  },
  { path: 'cart', loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent) },
  // Aggiungi qui altre rotte se necessario
];
