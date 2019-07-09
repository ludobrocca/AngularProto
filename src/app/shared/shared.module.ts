import { CapitalizePipe } from './capitalize.pipe';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ CapitalizePipe ],
  exports: [ CapitalizePipe ]
})
export class SharedModule { }
