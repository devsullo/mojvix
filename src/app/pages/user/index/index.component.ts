import { Component, OnInit, HostListener } from '@angular/core';
import { ScrollService } from '../../../shared/services/scroll.service';
import { Helper } from '../../../shared/helper';
import { RouteService } from '../../../shared/services/route.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  pageHeight: number;
  scroll: any;
  constructor(
    private scrollService: ScrollService,
    private routeService: RouteService
  ) {}

  ngOnInit() {
    this.calcScrollHeight();
    this.scroll = this.scrollService.init('#user-body-area');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calcScrollHeight();
    this.scroll.update();
  }

  calcScrollHeight(): void {
    this.pageHeight = window.innerHeight - 114;
  }

  goBack(): void {
    this.routeService.navigateBack();
  }
}
