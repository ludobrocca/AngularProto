import { CustomersComponent } from './customers/customers.component';
import { CustomersModule } from './customers/customer.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CustomersModule]
})
export class AppModule { }
