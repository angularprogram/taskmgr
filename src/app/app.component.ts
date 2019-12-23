import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  darkTheme = false;

  switchTheme(dark) {
    console.info(dark);
    this.darkTheme = dark;
  }
}
