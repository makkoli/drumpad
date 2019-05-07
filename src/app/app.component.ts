import { Component, HostListener } from '@angular/core';

import { DRUMPAD_DATA } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  drumPadData: object[] = DRUMPAD_DATA;
  currentCode: object;

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const currentCode = DRUMPAD_DATA.find(code => code.key === event.key);

    if (!!currentCode) {
      this.currentCode = Object.assign({}, currentCode);
    }
  }
}
