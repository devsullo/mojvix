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

  show() {
    this.expanded = true;
    if (this.player) {
      this.player.loadVideoById(this.title.videoSrc);
    }
  }

  close() {
    this.expanded = false;
  }
}
