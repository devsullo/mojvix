import { Injectable } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { ElementRef } from '@angular/core';

@Injectable()
export class ScrollService {
  els = {};
  constructor() {}

  init(selector: string) {
    this.els[selector] = new PerfectScrollbar(selector, {
      suppressScrollX: true
    });
    return this.els[selector];
  }

  scrollBottom(selector: string) {
    const el = this.els[selector].element;
    const top = el.scrollHeight;
    el.scrollTo({ top: top, behavior: 'smooth' });
  }
}
