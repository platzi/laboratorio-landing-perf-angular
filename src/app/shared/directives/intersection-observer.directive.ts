import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  Output,
  Inject, PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  fromIntersectionObserver,
  IntersectionStatus,
} from './from-intersection-observer';

@Directive({
  selector: '[appIntersectionObserver]',
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
  @Input() intersectionDebounce = 0;
  @Input() intersectionRootMargin = '0px';
  @Input() intersectionRoot!: HTMLElement;
  @Input() intersectionThreshold!: number | number[];

  @Output() visibilityChange = new EventEmitter<IntersectionStatus>();

  private destroy$ = new Subject();
  isBrowser = isPlatformBrowser(this.platformId);

  constructor(private element: ElementRef, @Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    const element = this.element.nativeElement;
    const config = {
      root: this.intersectionRoot,
      rootMargin: this.intersectionRootMargin,
      threshold: this.intersectionThreshold,
    };

    if (this.isBrowser) {
      fromIntersectionObserver(element, config, this.intersectionDebounce)
      .pipe(takeUntil(this.destroy$))
      .subscribe((status) => {
        this.visibilityChange.emit(status);
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(null);
  }
}
