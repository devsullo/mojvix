import { ScrollService } from './../../../shared/services/scroll.service';
import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-chat-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  scrollEl: any;
  _scrollHeight: number;
  @Input() set scrollHeight(value: number) {
    this._scrollHeight = value - 130;
    this.scrollEl
      ? this.scrollEl.update()
      : (this.scrollEl = this.scrollService.init('#vix-chat'));
  }

  constructor(
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    // this.chatService.createRoom('general');
  }


}
