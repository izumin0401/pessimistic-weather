import { NgModule } from '@angular/core';
import {
  MatProgressSpinnerModule,
  MatSpinner,
  MatTableModule,
  MatTabsModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
  ],
  entryComponents: [
    MatSpinner,
  ],
  exports: [
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
  ]
})
export class MaterialModule { }
