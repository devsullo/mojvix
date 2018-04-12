import { ScrollService } from './shared/scroll.service';
import { Component, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../../node_modules/perfect-scrollbar/css/perfect-scrollbar.css'
  ]
})
export class AppComponent {
  title = 'app';
  constructor(
    private scrollService: ScrollService
  ) {}
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.scrollService.onWindowResize();
  }
}
