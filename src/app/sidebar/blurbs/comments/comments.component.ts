import { CommentsService } from './comments.service';
import { IBlurbComment } from './../blurb';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('commentInput') commentInput: ElementRef;
  SETTINGS = SETTINGS;
  _mComment: string;
  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    this.commentsService
      .getComments(this.blurbId)
      .map(res => res.data)
      .subscribe(res => {
        this.comments = res.comments;
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
        .map(res => res.data.createComment)
        .subscribe(data => {
          console.log(data);
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
