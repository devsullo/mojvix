import { CommentsComponent } from './../comments/comments.component';
import { ScrollService } from './../../../shared/services/scroll.service';
import { BlurbsService } from './../blurbs.service';
import { Component, OnInit, Input, OnChanges, QueryList, ViewChildren } from '@angular/core';
import { IBlurb } from '../blurb';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blurbs-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class BlurbsComponent implements OnInit, OnChanges {
  blurbs: IBlurb[] = [];
  oneBlurb: IBlurb;
  blurbIds: number[];
  scrollEl: any;
  @Input()
  scrollHeight: number;

  constructor(
    private blurbsService: BlurbsService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.blurbsService.getBlurbsSounce$.subscribe(blurbsObserver => {
      if (!blurbsObserver.hightlight) {
        blurbsObserver.observable
          .pipe(map(res => res.data.blurbs))
          .subscribe(blurbs => {
            debug.log(blurbs);
            this.blurbs = blurbs;
            const newblurbIds = blurbs.map(bl => bl.id);
            if (this.blurbIds !== newblurbIds) {
              this.blurbIds = newblurbIds;
              this.blurbsService.subscribeToUpdateBlurb(this.blurbIds);
            }
            this.scrollService.update('#blurbs-list');
          });
      } else {
        blurbsObserver.observable
          .pipe(map(res => res.data.blurbs))
          .subscribe(blurb => {
            this.oneBlurb = blurb[0];
            this.scrollService.update('#blurbs-list');
          });
      }
    });
    this.blurbsService.getBlurbs();

    this.scrollService.loadMore(this.scrollEl, this.scrollHeight, () => {
      this.blurbsService.fetchMoreBlurbs(this.blurbs.length);
    });
  }

  onCloseBlurb() {
    this.oneBlurb = null;
  }

  ngOnChanges() {
    this.scrollEl
      ? this.scrollEl.update()
      : (this.scrollEl = this.scrollService.init('#blurbs-list'));
  }
}
