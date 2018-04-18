import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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
  page: string;
  constructor(
    private router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.page = event.url.split('/')[1];
      }
    });
  }
}
