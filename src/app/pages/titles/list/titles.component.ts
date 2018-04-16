import { TitleComponent } from './../single/title.component';
import { ScrollService } from './../../../shared/scroll.service';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
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
  scrollSelector = '#box-office';
  expandedTitleIndex: number;

  constructor(
    private titleService: TitlesService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.titles = this.titleService.getTitles();
    this.scrollService.initScroll(this.scrollSelector);
    this.calcScrollHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calcScrollHeight();
    this.scrollService.updateScroll(this.scrollSelector);
  }

  calcScrollHeight() {
    this.pageHeight = window.innerHeight - 116;
  }

  expandTitle(i: number) {
    this.expandedTitleIndex = i;
  }

  expandOrNot(i: number, length: number): boolean {
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
