import { Component } from '@angular/core';
import { IntersectionStatus } from '../../../shared/directives/from-intersection-observer';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  status: IntersectionStatus = IntersectionStatus.NotVisible;
  constructor() {}

  onVisibilityChanged(status: IntersectionStatus) {
    this.status = status;
  }
}
