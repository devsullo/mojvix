import { Injectable } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Injectable()
export class ScrollService {

  constructor() { }

  initScroll(selector: string): void {
    const ps = new PerfectScrollbar(selector);
  }

}
