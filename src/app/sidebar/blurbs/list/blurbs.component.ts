import { ScrollService } from './../../../shared/services/scroll.service';
import { BlurbsService } from './../blurbs.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { IBlurb } from '../blurb';

@Component({
  selector: 'app-blurbs',
  templateUrl: './blurbs.component.html',
  styleUrls: ['./blurbs.component.scss']
})
export class BlurbsComponent implements OnInit {
  blurbs: IBlurb[];
  pageHeight: number;
  scroll: any;

  constructor(
    private blurbsService: BlurbsService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.blurbs = this.blurbsService.getBlurbs();
    this.calcScrollHeight();
    this.scroll = this.scrollService.init('#blurbs');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calcScrollHeight();
    this.scroll.update();
  }

  calcScrollHeight() {
    this.pageHeight = window.innerHeight - 80;
  }
}
