import { Injectable } from '@angular/core';

const SETTINGS = window['VIX_SETTINGS'] || {};

@Injectable({
  providedIn: 'root'
})
export class LoadMoreService {
  public initItemLength: number;
  public compItemLenght: number;

  constructor() { }

  setCompItemLength(length: number) {
    this.compItemLenght = length;
  }

  init(scrollEl: any, scrollHeight: number, cb: any) {
    this.initItemLength = 0;
    scrollEl.element.addEventListener('ps-scroll-down', () => {
      const maxOffsetTop = scrollEl.contentHeight - scrollHeight;
      const currentOffsetTop = scrollEl.scrollbarYRail.offsetTop;
      const currentOffsetTopPercent = (currentOffsetTop * 100) / maxOffsetTop;
      // debug.info(this.initItemLength, this.compItemLenght);
      if (currentOffsetTopPercent >= SETTINGS.FETCH_MORE_PERCENT) {
        if (this.compItemLenght > this.initItemLength) {
          this.initItemLength = this.compItemLenght;
          cb();
        } else {
          // TO DO: Try one more time
        }
      }
    });
  }
}
