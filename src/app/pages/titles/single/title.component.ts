import { ITitle } from './../title';
import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, AfterViewInit {
  title: ITitle;
  expanded = false;
  player: YT.Player;
  arrowMarginLeft = 0;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  savePlayer(player) {
    this.player = player;
    this.player.mute();
    this.player.loadVideoById(this.title.videoSrc);
  }

  onPlayerStateChange(event) {
    // console.log('player state', event.data);
  }

  show(i: number, calls: number) {
    const boxOffice = document.querySelector('#box-office');
    const title = document.querySelector('.title').clientWidth;
    const rowNum = i % calls || calls;
    const titlePadding = boxOffice.clientWidth * 2.3 / 100;
    const halfPoster = title / 2;
    this.arrowMarginLeft = rowNum * title - halfPoster - 10 + rowNum * titlePadding - titlePadding;
    this.expanded = true;
    if (this.player) {
      this.player.loadVideoById(this.title.videoSrc);
    }
  }

  close() {
    this.expanded = false;
  }
}
