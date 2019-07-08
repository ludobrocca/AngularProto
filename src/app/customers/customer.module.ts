import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import {FilterTextBoxComponent} from './customers-list/filter-textbox.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextBoxComponent ],
  exports: [CustomersComponent]
})
export class CustomersModule { }
