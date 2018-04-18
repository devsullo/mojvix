import { Component, OnInit, HostListener } from '@angular/core';
import { ScrollService } from '../../../shared/scroll.service';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.scss']
})
export class SeanceComponent implements OnInit {
  pageHeight: number;
  scroll: any;
  constructor(
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.calcScrollHeight();
    this.scroll = this.scrollService.init('#seance-body-area');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calcScrollHeight();
    this.scroll.update();
  }

  calcScrollHeight() {
    this.pageHeight = window.innerHeight - 114;
  }
}
