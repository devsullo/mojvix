import { ScrollService } from './../../../shared/services/scroll.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-navigation-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnChanges {
  scrollEl: any;
  @Input() scrollHeight: number;

  constructor(
    private scrollService: ScrollService
  ) {}

  ngOnInit() {

  }

  ngOnChanges() {
    this.scrollEl ? this.scrollEl.update() : (this.scrollEl = this.scrollService.init('#sidebar-navigation-section'));
  }
}
