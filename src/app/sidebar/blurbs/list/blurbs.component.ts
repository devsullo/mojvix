import { ScrollService } from './../../../shared/services/scroll.service';
import { BlurbsService } from './../blurbs.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IBlurb } from '../blurb';

@Component({
  selector: 'app-blurbs',
  templateUrl: './blurbs.component.html',
  styleUrls: ['./blurbs.component.scss']
})
export class BlurbsComponent implements OnInit, OnChanges {
  blurbs: IBlurb[] = [];
  scrollEl: any;
  @Input() scrollHeight: number;

  constructor(
    private blurbsService: BlurbsService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.blurbsService.getBlurbsSounce$
      .subscribe(blarbsObserver => {
        blarbsObserver
        .map(res => res.data.blurbs)
        .subscribe(blurbs => {
          console.log(blurbs);
          this.blurbs = blurbs;
          this.scrollService.update('#blurbs-list');
        });
      });
    this.blurbsService.getBlurbs();
    // this.scrollService.scrollTop('#blurbs-list');

    this.scrollService.loadMore(this.scrollEl, this.scrollHeight, () => {
      this.blurbsService.fetchMoreBlurbs(this.blurbs.length);
    });
  }

  ngOnChanges() {
    this.scrollEl ? this.scrollEl.update() : (this.scrollEl = this.scrollService.init('#blurbs-list'));
  }
}
