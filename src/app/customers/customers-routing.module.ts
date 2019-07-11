import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
    { path: 'customers', component: CustomersComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class CustomersRoutingModule {

}
/**
 * The pattern is
 * -For every feature we define a route
 * -the route gets imported by the feature module
 * -the root module imports the features module
 */
