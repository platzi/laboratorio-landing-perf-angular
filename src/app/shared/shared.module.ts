import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ImgComponent } from './components/img/img.component';
import { IntersectionObserverDirective } from './directives/intersection-observer.directive';

@NgModule({
  declarations: [TimeAgoPipe, ImgComponent, IntersectionObserverDirective],
  imports: [CommonModule],
  exports: [TimeAgoPipe, ImgComponent, IntersectionObserverDirective],
})
export class SharedModule {}
