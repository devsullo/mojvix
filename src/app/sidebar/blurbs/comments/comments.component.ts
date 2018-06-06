import { IBlurbComment } from './../blurb';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blurb-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comments: IBlurbComment[];
  constructor() {}

  ngOnInit() {}
}
