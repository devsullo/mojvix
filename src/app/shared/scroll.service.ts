import { Injectable } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ScrollService {
  els = {};
  constructor() {}

  init(selector: string) {
    this.els[selector] = new PerfectScrollbar(selector);
    return this.els[selector];
  }

}
