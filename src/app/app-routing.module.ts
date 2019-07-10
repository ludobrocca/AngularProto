import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // has all routing modules


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers'}, // redirects url requests to the home page
    { path: '**', pathMatch: 'full', redirectTo: '/customers' } // ** is a wildcard that indicates any url requst that doesn't
                                                               // match previous routing cases
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], // here we register the const routes into the routing module
    exports: [ RouterModule ] // we make the module available to all classes that import
})
export class AppRoutingModule {

}
