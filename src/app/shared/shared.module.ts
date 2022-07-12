import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntersectionObserverDirective } from './directives/intersection-observer.directive';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ImgComponent } from './components/img/img.component';


@NgModule({
  declarations: [
    IntersectionObserverDirective,
    TimeAgoPipe,
    ImgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [IntersectionObserverDirective, TimeAgoPipe, ImgComponent]
})
export class SharedModule { }
