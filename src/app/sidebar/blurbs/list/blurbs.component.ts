import { BlurbsService } from './../blurbs.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { IBlurb } from '../blurb';
import { ScrollService } from '../../../shared/scroll.service';

@Component({
  selector: 'app-blurbs',
  templateUrl: './blurbs.component.html',
  styleUrls: ['./blurbs.component.scss']
})
export class BlurbsComponent implements OnInit {
  blurbs: IBlurb[];
  pageHeight: number;
  scrollSelector = '#blurbs';

  constructor(
    private blurbsService: BlurbsService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.blurbs = this.blurbsService.getBlurbs();
    this.scrollService.initScroll(this.scrollSelector);
    this.calcScrollHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calcScrollHeight();
    this.scrollService.updateScroll(this.scrollSelector);
  }

  calcScrollHeight() {
    this.pageHeight = window.innerHeight - 85;
  }
}
