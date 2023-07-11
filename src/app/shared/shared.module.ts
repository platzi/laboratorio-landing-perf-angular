import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './components/img/img.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';



@NgModule({
  declarations: [ImgComponent, TimeAgoPipe ],
  imports: [
    CommonModule
  ],
  exports: [ImgComponent, TimeAgoPipe ]
})
export class SharedModule { }
