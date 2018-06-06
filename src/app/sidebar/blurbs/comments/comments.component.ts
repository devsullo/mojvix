import { BlurbsService } from './../blurbs.service';
import { IBlurbComment } from './../blurb';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blurb-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comments: IBlurbComment[];
  @Input() blurbId: number;
  mComment: string;
  constructor(
    private blurbsService: BlurbsService
  ) {}

  ngOnInit() {}

  createComment(e) {
    if (e.keyCode === 13) {
      this.blurbsService
        .createBlurbComment(this.blurbId, this.mComment)
        .map(res => res.data.createComment)
        .subscribe(data => {
          console.log(data);
        });
      this.mComment = '';
    }
  }
}
