import { Component } from '@angular/core';
import { Status } from 'src/app/directives/observer.directive';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.scss'],
})
export class IntegrationsComponent {
  public visibleStatus: Status = 'novisible';

  onVisible(e: Status) {
    console.log(e);
    this.visibleStatus = e;
  }
}
