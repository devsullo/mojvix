import { Component, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../../node_modules/perfect-scrollbar/css/perfect-scrollbar.css',
    '../../node_modules/videogular2/fonts/videogular.css'
  ]
})
export class AppComponent {
  title = 'app';
  constructor() {}
}
