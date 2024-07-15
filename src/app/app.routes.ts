import { Routes } from '@angular/router';
import { OrderComponent } from './core/components/order/order.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { CartComponent } from './core/components/cart/cart.component';

export const routes: Routes = [

    {
        path: 'menu', component: MenuComponent
    },

    
    {
        path: 'order', component: OrderComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'cart', component: CartComponent
    }
];
