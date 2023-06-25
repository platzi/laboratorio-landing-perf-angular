import { Component } from '@angular/core';
import { Status } from 'src/app/directives/observer.directive';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public visibleStatus: Status = 'novisible';

  onVisible(e: Status) {
    console.log(e);
    this.visibleStatus = e;
  }
}
