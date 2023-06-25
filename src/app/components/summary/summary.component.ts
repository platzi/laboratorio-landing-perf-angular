import { Component } from '@angular/core';
import { Status } from 'src/app/directives/observer.directive';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  public visibleStatus: Status = 'novisible';

  onVisible(e: Status) {
    console.log(e);
    this.visibleStatus = e;
  }
}
