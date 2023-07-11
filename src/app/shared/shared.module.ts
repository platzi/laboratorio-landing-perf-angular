import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './components/img/img.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { IntersectionObserverDirective } from './directives/intersection-observer.directive';



@NgModule({
  declarations: [ImgComponent, TimeAgoPipe, IntersectionObserverDirective ],
  imports: [
    CommonModule
  ],
  exports: [ImgComponent, TimeAgoPipe, IntersectionObserverDirective ]
})
export class SharedModule { }
