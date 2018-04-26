import { Component, OnInit, HostListener } from '@angular/core';
import { ScrollService } from '../../../shared/services/scroll.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.scss']
})
export class SeanceComponent implements OnInit {
  pageHeight: number;
  scroll: any;
  constructor(
    private scrollService: ScrollService,
    private location: Location
  ) {}

  ngOnInit() {
    this.calcScrollHeight();
    this.scroll = this.scrollService.init('#seance-body-area');
  }

  goBack(): void {
    this.location.back();
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
