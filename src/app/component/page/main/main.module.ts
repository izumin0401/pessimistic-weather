import { NgModule } from '@angular/core';
import { MainComponent } from 'src/app/component/page/main/main.component';
import { BottomSheetOverviewComponent } from 'src/app/component/page/main/component/bottom-sheet-overview/bottom-sheet-overview.component';
import { MaterialModule } from 'src/app/module/material.module';
import { PipeModule } from 'src/app/module/pipe.module';
import { SharedModule } from 'src/app/module/shared.module';

@NgModule({
  declarations: [
    BottomSheetOverviewComponent,
    MainComponent,
  ],
  entryComponents: [
    BottomSheetOverviewComponent,
  ],
  imports: [
    MaterialModule,
    PipeModule,
    SharedModule,
  ],
})
export class MainModule { }
