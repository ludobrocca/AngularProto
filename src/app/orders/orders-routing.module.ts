import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from '../orders/orders.component';


// orders/400 is a simple query
const routes: Routes = [
  {path: 'orders/:id', component: OrdersComponent} // :id is called a route parameter, obv the name can change,
                                                 // it's also possible to cancatenate multiple route parameters such as /orders/:id/:another
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class OrdersRoutingModule {

}
