import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgChartsModule,
    SwiperModule,
  ],
  exports: [
    FontAwesomeModule,
    NgChartsModule,
    SwiperModule,
  ]
})
export class SharedModule { }
