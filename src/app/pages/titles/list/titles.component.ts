import { element } from 'protractor';
import { TitleComponent } from './../single/title.component';
import { ScrollService } from './../../../shared/services/scroll.service';
import { Component, OnInit, HostListener, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ITitle } from '../title';
import { TitlesService } from '../titles.service';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {
  titles: ITitle[];
  pageHeight: number;
  scroll: any;
  @ViewChildren('expandArea') expandArea: QueryList<TitleComponent>;

  constructor(
    private titleService: TitlesService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.titles = this.titleService.getTitles();
    this.calcScrollHeight();
    this.scroll = this.scrollService.init('#box-office');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calcScrollHeight();
    this.scroll.update();
  }

  calcScrollHeight(): void {
    this.pageHeight = window.innerHeight - 112;
  }

  expandTitle(i: number): void {
    let row = 0;
    const T = (i + 1) / 3;
    if (Number.isInteger(T)) {
      row = T - 1;
    } else {
      row = Math.floor(T);
    }
    this.closeAllExpandAreas();
    const expandArea = this.expandArea.toArray()[row];
    expandArea.title = this.titles[i];
    expandArea.show();
    setTimeout(() => {
      const top = document
          .querySelector('#expanded-title')
          .documentOffsetTop() - window.innerHeight / 2 + 112;
      this.scroll.element.scrollTo({ top: top, behavior: 'smooth' });
    });
  }

  closeAllExpandAreas(): void {
    this.expandArea.forEach( el => el.close() );
  }

  detectExpandArea(i: number, length: number): boolean {
    if (length % 3 !== 0) {
      if (i === length) {
        return true;
      }
    }
    if (i % 3 === 0) {
      return true;
    }
  }
}
