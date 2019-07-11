import { FilterTextBoxComponent } from './customers-list/filter-textbox.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersRoutingModule } from '../customers/customers-routing.module';

@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule, CustomersRoutingModule ],
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextBoxComponent ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
