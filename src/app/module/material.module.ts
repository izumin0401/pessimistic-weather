import { NgModule } from '@angular/core';
import {
  MatBottomSheetModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSpinner,
  MatTableModule,
  MatTabsModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatBottomSheetModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
  ],
  entryComponents: [
    MatSpinner,
  ],
  exports: [
    MatBottomSheetModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
  ]
})
export class MaterialModule { }
