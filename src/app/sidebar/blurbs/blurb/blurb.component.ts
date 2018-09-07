import { RouteService } from './../../../shared/services/route.service';
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
  @Input()
  blurb: IBlurb;
  @Input()
  highlight: boolean;
  @Output()
  closeBlurb = new EventEmitter<boolean>();
  @ViewChild('comments')
  comments: CommentsComponent;

  constructor(
    private blurbsService: BlurbsService,
    private routeService: RouteService
  ) {}

  ngOnInit() {}

  onCloseBlurb() {
    this.closeBlurb.emit(true);
  }

  voteBlurb(action: string, blurb: IBlurb) {
    if (!blurb.viewer) {
      this.routeService.navigateSeanceOrMain('join');
      return;
    }
    let voteAction;
    const viewerVote = blurb.viewer.vote;
    if (action === viewerVote) {
      voteAction = 'NONE';
      blurb[this.getActionName(action)] -= 1;
    } else {
      voteAction = action;
      blurb[this.getActionName(action)] += 1;
      if (viewerVote !== 'NONE') {
        blurb[this.getContActionName(action)] -= 1;
      }
    }
    blurb.viewer.vote = voteAction;
    this.blurbsService
      .voteBlurb(voteAction, blurb.id)
      .pipe(map(res => res.data.voteBlurb))
      .subscribe(data => {
        debug.log(data);
      });
  }

  getActionName(action: string): string {
    let actionName = action.toLowerCase();
    actionName =
      'total' + actionName.charAt(0).toUpperCase() + actionName.slice(1);
    return actionName;
  }

  getContActionName(action: string): string {
    if (action === 'AGREE') {
      return this.getActionName('DISAGREE');
    }
    return this.getActionName('AGREE');
  }

  focusOnCommentInput() {
    this.comments.focusOnCommentInput();
  }
}
