import {
  LoadMoreService,
} from './../../../shared/services/load-more.service';
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
    private scrollService: ScrollService,
    private loadMoreService: LoadMoreService
  ) {}

  ngOnInit() {
    this.blurbsService.getBlurbsSounce$.subscribe(blurbsObserver => {
      // Set load more
      this.loadMoreService.init(this.scrollEl, this.scrollHeight, () => {
        this.blurbsService.fetchMoreBlurbs(this.blurbs.length);
      });
      if (!blurbsObserver.hightlight) {
        blurbsObserver.observable
          .pipe(map(res => res.data.blurbs))
          .subscribe(blurbs => {
            debug.log(blurbs);
            // Temp solution for immutable data
            this.blurbs = JSON.parse(JSON.stringify(blurbs));
            this.loadMoreService.setCompItemLength(this.blurbs.length);
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
