import { RouteService } from './../../../shared/services/route.service';
import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ScrollService } from '../../../shared/services/scroll.service';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducers';
import * as SeanceActions from '../store/seance.actions';

@Component({
  selector: 'app-seance-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {
  pageHeight: number;
  scroll: any;
  constructor(
    private scrollService: ScrollService,
    private routeService: RouteService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.calcScrollHeight();
    this.scroll = this.scrollService.init('#seance-body-area');
  }

  ngOnDestroy() {
    this.store.dispatch(new SeanceActions.DestroySeance());
  }

  goBack(): void {
    this.routeService.navigateBack();
  }

  postBlurb(): void {
    this.routeService.navigateSeance('post-blurb');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calcScrollHeight();
    this.scroll.update();
  }

  calcScrollHeight(): void {
    this.pageHeight = window.innerHeight - 114;
  }
}
