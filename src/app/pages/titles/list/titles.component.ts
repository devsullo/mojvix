import { ScrollService } from './../../../shared/scroll.service';
import { Component, OnInit } from '@angular/core';
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

  constructor(
    private titleService: TitlesService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.titles = this.titleService.getTitles();
    this.scrollService.initScroll('#box-office');
    this.scrollService.els['#box-office'].heightChanges.subscribe(
      val => this.pageHeight = val - 120
    );
  }

}
