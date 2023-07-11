import { Component } from '@angular/core';
import { IntersectionStatus } from '../../../shared/directives/from-intersection-observer';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.scss'],
})
export class SnippetsComponent {
  status: IntersectionStatus = IntersectionStatus.NotVisible;

  constructor() {}

  onVisibilityChanged(status: IntersectionStatus) {
    this.status = status;
  }
}
