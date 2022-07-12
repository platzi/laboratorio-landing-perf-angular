import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ImgComponent } from './components/img/img.component';


@NgModule({
  declarations: [
    TimeAgoPipe,
    ImgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TimeAgoPipe, ImgComponent]
})
export class SharedModule { }
