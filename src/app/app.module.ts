import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DrumPadComponent } from './drum-pad/drum-pad.component';
import { LabelComponent } from './label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    DrumPadComponent,
    LabelComponent,
  ],
  imports: [
    BrowserModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
