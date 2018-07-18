import { BlurbsService } from './../../blurbs/blurbs.service';
import { ScrollService } from './../../../shared/services/scroll.service';
import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { HeaderService } from '../../header/header.service';

@Component({
  selector: 'app-notifications-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  scrollEl: any;
  _scrollHeight: number;
  @Input()
  set scrollHeight(value: number) {
    this._scrollHeight = value;
    this.scrollEl ? this.scrollEl.update() : (this.scrollEl = this.scrollService.init('#sidebar-notifications'));
  }

  constructor(
    private scrollService: ScrollService,
    private blurbsService: BlurbsService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {}

  getOneBlurb(id: number) {
    this.blurbsService.getBlurbs(`id:${id}`).subscribe(() => {
      this.headerService.changeNavigationTab('blurbs');
    });
  }
}
