import { Component, OnInit, ViewChild } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from "swiper/angular";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: false,
    scrollbar: { draggable: true },
    loop: true
  };

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor() { }

  ngOnInit(): void {
  }

  slideNext(){
    this.swiper?.swiperRef?.slideNext();
  }
  slidePrev(){
    this.swiper?.swiperRef?.slidePrev();
  }

}
