import { NgModule } from '@angular/core';
import { CloudsPipe } from 'src/app/pipe/clouds.pipe';
import { TempPipe } from 'src/app/pipe/temp.pipe';
import { TimePipe } from 'src/app/pipe/time.pipe';

@NgModule({
  declarations: [
    CloudsPipe,
    TempPipe,
    TimePipe,
  ],
  exports: [
    CloudsPipe,
    TempPipe,
    TimePipe,
  ]
})
export class PipeModule { }
