import { NgModule } from '@angular/core';
import { MainComponent } from 'src/app/component/page/main/main.component';
import { MaterialModule } from 'src/app/module/material.module';
import { PipeModule } from 'src/app/module/pipe.module';
import { SharedModule } from 'src/app/module/shared.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    MaterialModule,
    PipeModule,
    SharedModule,
  ],
})
export class MainModule { }
