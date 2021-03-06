import { Store } from '@ngrx/store';
import { BlurbsService } from './../../blurbs/blurbs.service';
import { ScrollService } from './../../../shared/services/scroll.service';
import { Component, OnInit, Input } from '@angular/core';

import * as fromApp from '../../../store/app.reducers';
import * as NavigationActions from './../../header/navigation/store/navigation.actions';

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
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {}

  getOneBlurb(id: number) {
    this.blurbsService.getBlurbs(`id:${id}`, true).subscribe(() => {
      this.store.dispatch(new NavigationActions.ChangeNavTab(1));
      this.scrollService.scrollTop('#blurbs-list', false, 100);
    });
  }
}
