import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import {FilterTextBoxComponent} from './customers-list/filter-textbox.component';
import { from } from 'rxjs';

@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule ], // CommonModule has ngFor. ngIf, FormsModule has ngModel
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextBoxComponent ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
