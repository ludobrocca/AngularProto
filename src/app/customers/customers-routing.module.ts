import { CustomersComponent } from './customers.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes), // this is not a root module, so we  write the forChild method
  ],
  exports : [RouterModule]
})
export class CustomersRoutingModule {

}

/**
 * The pattern is
 * -For every feature we define a route
 * -the route gets imported by the feature module
 * -the root module imports the features module
 */
