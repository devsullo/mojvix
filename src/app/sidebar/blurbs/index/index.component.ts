import { CommentsComponent } from './../comments/comments.component';
import { ScrollService } from './../../../shared/services/scroll.service';
import { BlurbsService } from './../blurbs.service';
import { Component, OnInit, Input, OnChanges, QueryList, ViewChildren } from '@angular/core';
import { IBlurb } from '../blurb';

@Component({
  selector: 'app-blurbs-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class BlurbsComponent implements OnInit, OnChanges {
  blurbs: IBlurb[] = [];
  blurbIds: number[];
  scrollEl: any;
  @Input() scrollHeight: number;
  @ViewChildren('comments') comments: QueryList<CommentsComponent>;

  constructor(
    private blurbsService: BlurbsService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.blurbsService.getBlurbsSounce$.subscribe(blarbsObserver => {
      blarbsObserver.map(res => res.data.blurbs).subscribe(blurbs => {
        console.log(blurbs);
        this.blurbs = blurbs;
        const newblurbIds = blurbs.map(bl => bl.id);
        if (this.blurbIds !== newblurbIds) {
          this.blurbIds = newblurbIds;
          this.blurbsService.subscribeToUpdateBlurb(this.blurbIds);
        }
        this.scrollService.update('#blurbs-list');
      });
    });
    this.blurbsService.getBlurbs();

    this.scrollService.loadMore(this.scrollEl, this.scrollHeight, () => {
      this.blurbsService.fetchMoreBlurbs(this.blurbs.length);
    });
  }

  voteBlurb(action: string, blurbId: number) {
    this.blurbsService
      .voteBlurb(action, blurbId)
      .map(res => res.data.voteBlurb)
      .subscribe(data => {
        console.log(data);
      });
  }

  focusOnCommentInput(i: number) {
    this.comments.toArray()[i].focusOnCommentInput();
  }

  ngOnChanges() {
    this.scrollEl
      ? this.scrollEl.update()
      : (this.scrollEl = this.scrollService.init('#blurbs-list'));
  }
}
