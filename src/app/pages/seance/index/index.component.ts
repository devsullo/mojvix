import { SeanceService } from './../seance.service';
import { RouteService } from './../../../shared/services/route.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
import { ScrollService } from '../../../shared/services/scroll.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-seance-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  pageHeight: number;
  scroll: any;
  constructor(
    private scrollService: ScrollService,
    private location: Location,
    private routeService: RouteService,
    private route: ActivatedRoute,
    private seanceService: SeanceService
  ) {
    const slug: string = route.snapshot.params.slug;
    this.seanceService.initSeance(slug);
    console.log(slug);
  }

  ngOnInit() {
    this.calcScrollHeight();
    this.scroll = this.scrollService.init('#seance-body-area');
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
