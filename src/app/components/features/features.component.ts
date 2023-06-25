import { Component } from '@angular/core';
import { Status } from 'src/app/directives/observer.directive';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  public visibleStatus: Status = 'novisible';

  onVisible(e: Status) {
    console.log(e);
    this.visibleStatus = e;
  }
}
