import { CommentsService } from './comments.service';
import { IBlurbComment } from './../blurb';
import { Component, OnInit, Input } from '@angular/core';
const SETTINGS = window['VIX_SETTINGS'] || {};

@Component({
  selector: 'app-blurb-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comments: IBlurbComment[];
  @Input() blurbId: number;
  mComment: string;
  SETTINGS = SETTINGS;
  constructor(private commentsService: CommentsService) {}

  ngOnInit() {}

  createComment(e) {
    if (e.keyCode === 13) {
      this.commentsService
        .createComment(this.blurbId, this.mComment)
        .map(res => res.data.createComment)
        .subscribe(data => {
          console.log(data);
        });
      this.mComment = '';
    }
  }

  fetchMoreComments() {
    this.commentsService.fetchMoreComments(this.comments.length, this.blurbId)
      .map(res => res.data.comments)
      .subscribe(res => {
        console.log(res);
        this.comments = [...this.comments, ...res];
      });
  }
}
