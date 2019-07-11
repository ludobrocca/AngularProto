import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CityDetailComponent } from './city-detail.component';

const routes: Routes = [
  { path: 'city/:city', component: CityDetailComponent }
];

@NgModule({
    imports : [ RouterModule.forChild(routes) ],
    exports : [ RouterModule]
})
export class CityDetailRoutingModule {

}
