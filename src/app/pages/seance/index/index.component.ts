import { SeanceService } from './../seance.service';
import { RouteService } from './../../../shared/services/route.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ScrollService } from '../../../shared/services/scroll.service';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

import * as fromSeance from '../store/seance.reducer';
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
    private location: Location,
    private routeService: RouteService,
    private route: ActivatedRoute,
    private seanceService: SeanceService,
    private store: Store<fromSeance.State>
  ) {
    const seancePayload = {
      id: route.snapshot.params.id,
      slug: route.snapshot.params.slug
     };
    this.store.dispatch(new SeanceActions.InitializeSeance(seancePayload));
  }

  ngOnInit() {
    this.calcScrollHeight();
    this.scroll = this.scrollService.init('#seance-body-area');
  }

  ngOnDestroy() {
    this.store.dispatch(new SeanceActions.DestroySeance());
  }

  goBack(): void {
    this.location.back();
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
