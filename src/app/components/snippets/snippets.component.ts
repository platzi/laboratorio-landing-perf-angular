import { Component } from '@angular/core';
import { Status } from 'src/app/directives/observer.directive';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.scss'],
})
export class SnippetsComponent {
  public visibleStatus: Status = 'novisible';

  onVisible(e: Status) {
    console.log(e);
    this.visibleStatus = e;
  }
}
