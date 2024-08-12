import {  Routes } from '@angular/router';
import { authGuard } from './core/components/auth/authGuards/auth.guard';


export const routes: Routes = [
    {
        path: 'menu',
        loadComponent: () => import('./core/components/menu/menu.component')
            .then(mod => mod.MenuComponent)
    },
    {
        path: 'order',
        loadComponent: () => import('./core/components/order/order.component')
            .then(mod => mod.OrderComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./core/components/contact/contact.component')
            .then(mod => mod.ContactComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import('./core/components/cart/cart.component')
            .then(mod => mod.CartComponent)
    },
    {
        path : 'profile',
        canActivate : [authGuard],
        loadChildren : () => import('./core/components/profile/profile.routes')
            .then(mod => mod.rout),
    },
    {
        path: 'login',
        loadComponent: ()=> import('./core/components/auth/login/login.component')
            .then(m => m.LoginComponent)
    },
    {
        path: '**',
        redirectTo: 'menu' // yoki kerakli default yo'nalishga yo'naltiring
    }
];

