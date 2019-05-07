import { Component, HostListener } from '@angular/core';

import { DRUMPAD_DATA } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  drumPadData: object[] = DRUMPAD_DATA;
  currentKey: object;

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const currentKey = DRUMPAD_DATA.find(code => code.key === event.key);

    if (!!currentKey) {
      this.currentKey = Object.assign({}, currentKey);
      document.body.style.backgroundColor = currentKey.color;
    }
  }
}
