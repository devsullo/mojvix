import { ITitle } from './../title';
import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

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
  playerIsReady = false;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  savePlayer(player): void {
    if (!this.player) {
      this.player = player;
      this.player.mute();
    }
  }

  onPlayerStateChange(event) {
    // console.log('player state', event.data);
  }

  show(i: number, calls: number): void {
    const boxOffice = document.querySelector('#box-office');
    const title = document.querySelector('.title').clientWidth;
    const rowNum = i % calls || calls;
    const titlePadding = boxOffice.clientWidth * 2.3 / 100;
    const halfPoster = title / 2;
    this.arrowMarginLeft =
      rowNum * title - halfPoster - 10 + rowNum * titlePadding - titlePadding;
    this.expanded = true;
  }

  initPlayer(): void {
    this.playerIsReady = true;
  }

  close(): void {
    this.expanded = false;
    this.playerIsReady = false;
  }
}
