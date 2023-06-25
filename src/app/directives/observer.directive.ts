import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
} from '@angular/core';
import { Subject, delay, filter } from 'rxjs';

export type Status = 'visible' | 'novisible';

@Directive({
  selector: '[appObserver]',
})
export class ObserverDirective implements OnInit, AfterViewInit, OnDestroy {
  @Input() debounceTime = 0;
  @Input() threshold = 1;

  @Output() visible = new EventEmitter<Status>();

  private observer: IntersectionObserver | undefined;

  private destroy$ = new Subject();
  isBrowser = isPlatformBrowser(this.platformId);

  constructor(
    private element: ElementRef,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit() {
    if (this.isBrowser) {
      this.createObserver();
    }
  }

  ngAfterViewInit() {
    this.startObserverElements();
  }

  private subject$ = new Subject<{
    entry: IntersectionObserverEntry | null;
    observer: IntersectionObserver | null;
  }>();

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
    this.subject$.next({ entry: null, observer: null });
    this.subject$.complete();
  }

  private isVisible(element: HTMLElement) {
    return new Promise((resolve) => {
      const observer = new IntersectionObserver(([entry]) => {
        resolve(entry.intersectionRatio > 0.1);
        observer.disconnect();
      });
      observer.observe(element);
    });
  }

  private createObserver() {
    const options = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries
        .filter((item) => item.isIntersecting)
        .forEach((item) => {
          this.subject$.next({ entry: item, observer });
        });
    }, options);
  }

  private startObserverElements() {
    if (!this.observer) {
      return;
    }
    this.observer.observe(this.element.nativeElement);
    this.subject$
      .pipe(delay(this.debounceTime), filter(Boolean))
      .subscribe(async ({ entry, observer }) => {
        const target = entry?.target as HTMLElement;
        const isStillVisible = await this.isVisible(target);
        if (isStillVisible) {
          this.visible.emit('visible');
          // observer?.disconnect();
          observer?.unobserve(target);
        } else {
          this.visible.emit('novisible');
        }
      });
  }
}
