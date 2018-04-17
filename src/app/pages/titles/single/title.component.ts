import { ITitle } from './../title';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  title: ITitle;
  expanded = false;
  constructor() {}

  ngOnInit() {
    console.log();
  }

  show() {
    this.expanded = true;
  }

  close() {
    this.expanded = false;
  }
}
