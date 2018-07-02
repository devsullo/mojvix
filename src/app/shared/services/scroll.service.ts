import { Injectable } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { ElementRef } from '@angular/core';

@Injectable()
export class ScrollService {
  scrollSelectors = {};
  constructor() {}

  init(selector: string) {
    this.scrollSelectors[selector] = new PerfectScrollbar(selector, {
      suppressScrollX: true
    });
    return this.scrollSelectors[selector];
  }

  scrollBottom(selector: string, update = false) {
    const scrollSelector = this.scrollSelectors[selector];
    if (!scrollSelector) {
      console.warn(`Scroll selector ${selector} does't exists`);
      return;
    }
    if (update) {
      scrollSelector.update();
    }
    const el = scrollSelector.element;
    const top = el.scrollHeight;
    setTimeout(() => {
      el.scrollTo({ top: top, behavior: 'smooth' });
    }, 50);
  }

  scrollTop(selector: string, update = false) {
    const scrollSelector = this.scrollSelectors[selector];
    if (!scrollSelector) {
      console.warn(`Scroll selector ${selector} does't exists`);
      return;
    }
    if (update) {
      scrollSelector.update();
    }
    const el = scrollSelector.element;
    setTimeout(() => {
      el.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  }

  update(selector: string) {
    const scrollSelector = this.scrollSelectors[selector];
    if (!scrollSelector) {
      console.warn(`Scroll selector ${selector} does't exists`);
      return;
    }
    setTimeout(() => {
      scrollSelector.update();
    }, 50);
  }

  loadMore(scrollEl: any, scrollHeight: number, cb: any) {
    scrollEl.element.addEventListener('ps-scroll-down', () => {
      const maxOffsetTop = scrollEl.contentHeight - scrollHeight;
      const currentOffsetTop = scrollEl.scrollbarYRail.offsetTop;
      const currentOffsetTopPercent = (currentOffsetTop * 100) / maxOffsetTop;
      if (currentOffsetTopPercent > 90) {
        cb();
      }
    });
  }
}
