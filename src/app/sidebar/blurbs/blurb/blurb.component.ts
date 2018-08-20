import { BlurbsService } from './../blurbs.service';
import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { IBlurb } from '../blurb';
import { map } from 'rxjs/operators';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-blurb',
  templateUrl: './blurb.component.html',
  styleUrls: ['./blurb.component.scss']
})
export class BlurbComponent implements OnInit {
  @Input() blurb: IBlurb;
  @Input() highlight: boolean;
  @Output() closeBlurb = new EventEmitter<boolean>();
  @ViewChild('comments') comments: CommentsComponent;

  constructor(
    private blurbsService: BlurbsService
  ) { }

  ngOnInit() {
  }

  onCloseBlurb() {
    this.closeBlurb.emit(true);
  }

  voteBlurb(action: string, blurb: IBlurb) {
    let voteAction;
    action === blurb.viewer.vote ? (voteAction = 'NONE') : (voteAction = action);
    this.blurbsService
      .voteBlurb(voteAction, blurb.id)
      .pipe(map(res => res.data.voteBlurb))
      .subscribe(data => {
        console.log(data);
      });
  }

  focusOnCommentInput() {
    this.comments.focusOnCommentInput();
  }

}
