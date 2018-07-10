import { Injectable } from '@angular/core';

@Injectable()
export class Helper {
  constructor() { }

  getMoviePosterColls(selector: string): number {
    const el = document.querySelector(selector);
    const coll = el.clientWidth > 1240 ? 4 : 3;
    return coll;
  }

}
