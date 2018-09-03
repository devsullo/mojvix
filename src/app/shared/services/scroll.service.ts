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

  scrollBottom(selector: string, update = false, timeout = 50) {
    const scrollSelector = this.scrollSelectors[selector];
    if (!scrollSelector) {
      debug.warn(`Scroll selector ${selector} does't exists`);
      return;
    }
    if (update) {
      scrollSelector.update();
    }
    const el = scrollSelector.element;
    const top = el.scrollHeight;
    setTimeout(() => {
      el.scrollTo({ top: top, behavior: 'smooth' });
    }, timeout);
  }

  scrollTop(selector: string, update = false, timeout = 0) {
    const scrollSelector = this.scrollSelectors[selector];
    if (!scrollSelector) {
      debug.warn(`Scroll selector ${selector} does't exists`);
      return;
    }
    if (update) {
      scrollSelector.update();
    }
    const el = scrollSelector.element;
    setTimeout(() => {
      el.scrollTo({ top: 0 });
    }, timeout);
  }

  update(selector: string, timeout = 50) {
    const scrollSelector = this.scrollSelectors[selector];
    if (!scrollSelector) {
      debug.warn(`Scroll selector ${selector} does't exists`);
      return;
    }
    setTimeout(() => {
      scrollSelector.update();
    }, timeout);
  }

  loadMore(scrollEl: any, scrollHeight: number, cb: any) {
    scrollEl.element.addEventListener('ps-scroll-down', () => {
      const maxOffsetTop = scrollEl.contentHeight - scrollHeight;
      const currentOffsetTop = scrollEl.scrollbarYRail.offsetTop;
      const currentOffsetTopPercent = (currentOffsetTop * 100) / maxOffsetTop;
      if (currentOffsetTopPercent > 60) {
        cb();
      }
    });
  }
}
