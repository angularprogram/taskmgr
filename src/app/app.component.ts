import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  darkTheme = false;

  constructor(private oc: OverlayContainer) { }

  switchTheme(dark) {
    console.info(dark);
    this.darkTheme = dark;
    this.oc.themeClass = dark ? 'myapp-dark-theme' : null;
  }
}
