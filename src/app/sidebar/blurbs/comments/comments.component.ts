import { CommentsService } from './comments.service';
import { IBlurbComment } from './../blurb';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { ScrollService } from '../../../shared/services/scroll.service';

const SETTINGS = window['VIX_SETTINGS'] || {};

@Component({
  selector: 'app-blurb-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: IBlurbComment[] = [];
  @Input() blurbId: number;
  @Input() totalComments: number;
  @Input() scrollSelector: string;
  @ViewChild('commentInput') commentInput: ElementRef;
  SETTINGS = SETTINGS;
  _mComment: string;

  constructor(
    private commentsService: CommentsService,
    private scroll: ScrollService
  ) {}

  ngOnInit() {
    this.commentsService
      .getComments(this.blurbId)
      .pipe(map(res => res.data))
      .subscribe(res => {
        this.comments = res.comments;
        this.scroll.update(this.scrollSelector);
      });
    const commentTypeContent = this.commentsService.commentTypeStore[this.blurbId];
    if (commentTypeContent) {
      this.mComment = commentTypeContent;
    }
  }

  set mComment(value: string) {
    this._mComment = value;
    this.commentsService.commentTypeStore[this.blurbId] = this._mComment;
  }

  get mComment() {
    return this._mComment;
  }

  createComment(e) {
    if (e.keyCode === 13) {
      this.commentsService
        .createComment(this.blurbId, this.mComment)
        .pipe(map(res => res.data.createComment))
        .subscribe(data => {
          debug.log(data);
          this.mComment = '';
        });
      return false;
    }
  }

  focusOnCommentInput() {
    this.commentInput.nativeElement.focus();
  }

  fetchMoreComments() {
    this.commentsService.fetchMoreComments(this.comments.length, this.blurbId);
  }
}
