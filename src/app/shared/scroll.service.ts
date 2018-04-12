import { Injectable } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ScrollService {
  els = {};
  constructor() {}

  initScroll(selector: string): void {
    this.els[selector] = new PerfectScrollbar(selector);
    const el = this.els[selector];
    el.height = new BehaviorSubject(window.innerHeight);
    el.heightChanges = el.height.asObservable();
  }

  updateScroll(selector: string): void {
    this.els[selector].update();
  }

  onWindowResize(): void {
    for (const key in this.els) {
      if (this.els.hasOwnProperty(key)) {
        const el = this.els[key];
        el.height.next(window.innerHeight);
        this.updateScroll(key);
      }
    }
  }
}
