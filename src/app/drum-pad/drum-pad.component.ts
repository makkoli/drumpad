import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatRipple } from '@angular/material';

@Component({
  selector: 'app-drum-pad',
  templateUrl: './drum-pad.component.html',
  styleUrls: ['./drum-pad.component.css']
})
export class DrumPadComponent implements OnChanges {

  @ViewChild(MatRipple) ripple: MatRipple;

  @Input() color: string;
  @Input() currentKey: object;
  @Input() keyCode: string;
  @Input() url: string;

  disabled: boolean = true;
  unbounded: boolean = false;
  playing: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.currentKey.firstChange
      && this.keyCode === changes.currentKey.currentValue.key) {

      this.playSound();

    }
  }

  launchRipple() {
    const rippleRef = this.ripple.launch({
      color: this.color,
      centered: true
    });
  }

  playSound() {
    this.launchRipple();

    this.playing = true;
    const sound = <HTMLAudioElement>document.getElementById(this.keyCode);

    sound.addEventListener('ended', () => {
      this.playing = false;
    });

    sound.play();
  }
}
