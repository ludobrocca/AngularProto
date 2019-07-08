import { CustomersComponent } from './customers/customers.component';
import { CustomersModule } from './customers/customer.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CustomersModule]
})
export class AppModule { }
