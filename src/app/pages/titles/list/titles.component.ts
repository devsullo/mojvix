import { element } from 'protractor';
import { TitleComponent } from './../single/title.component';
import { ScrollService } from './../../../shared/services/scroll.service';
import { Component, OnInit, HostListener, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ITitle } from '../title';
import { TitlesService } from '../titles.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {
  titles: ITitle[];
  pageHeight: number;
  scroll: any;
  colls = 3;
  scrollTopVal = 0;
  expandedTitle: TitleComponent;
  @ViewChildren('expandArea') expandArea: QueryList<TitleComponent>;

  constructor(
    private titleService: TitlesService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.titles = this.titleService.getTitles();
    this.calcScrollHeight();
    this.scroll = this.scrollService.init('#box-office');

    this.scroll.element.addEventListener('ps-scroll-y', () => {
      if (this.scroll.scrollbarYRail.offsetTop === this.scrollTopVal || this.scroll.reach.y) {
        this.expandedTitle.initPlayer();
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calcScrollHeight();
    this.scroll.update();
  }

  calcScrollHeight(): void {
    this.pageHeight = window.innerHeight - 112;
    const boxOfficeEl =  document.querySelector('#box-office');
    if (boxOfficeEl.clientWidth > 1240) {
      this.colls = 4;
    } else {
      this.colls = 3;
    }
  }

  expandTitle(i: number): void {
    if (isPlatformBrowser) {
      let row = 0;
      const T = (i + 1) / this.colls;
      if (Number.isInteger(T)) {
        row = T - 1;
      } else {
        row = Math.floor(T);
      }
      this.closeAllExpandAreas();
      this.expandedTitle = this.expandArea.toArray()[row];
      this.expandedTitle.title = this.titles[i];
      this.expandedTitle.show(i + 1, this.colls);
      // TO DO: wait el expand
      setTimeout(() => {
        this.scrollTopVal = Math.floor(document
            .querySelector('#expanded-title')
            .documentOffsetTop() - window.innerHeight / 2 + 112);
        this.scroll.element.scrollTo({
          top: this.scrollTopVal,
          behavior: 'smooth'
        });
        if (this.scroll.scrollbarYRail.offsetTop === this.scrollTopVal) {
          this.expandedTitle.initPlayer();
        }
      });
    }
  }

  closeAllExpandAreas(): void {
    this.expandArea.forEach( el => el.close() );
  }

  detectExpandArea(i: number, length: number): boolean {
    if (length % this.colls !== 0) {
      if (i === length) {
        return true;
      }
    }
    if (i % this.colls === 0) {
      return true;
    }
  }
}
