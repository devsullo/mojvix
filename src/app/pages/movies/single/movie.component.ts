import { IMovie } from './../movie';
import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../../shared/services/scroll.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, AfterViewInit {
  movie: IMovie;
  expanded = false;
  player: YT.Player;
  arrowMarginLeft = 0;
  playerIsReady = false;
  constructor(
    private scrollService: ScrollService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  savePlayer(player): void {
    if (!this.player) {
      this.player = player;
    }
  }

  onPlayerStateChange(event) {
    // console.log('player state', event.data);
  }

  show(i: number, calls: number): void {
    const boxOffice = document.querySelector('#box-office');
    const movie = document.querySelector('.movie').clientWidth;
    const rowNum = i % calls || calls;
    const moviePadding = boxOffice.clientWidth * 2.3 / 100;
    const halfPoster = movie / 2;
    this.arrowMarginLeft =
      rowNum * movie - halfPoster - 10 + rowNum * moviePadding - moviePadding;
    this.expanded = true;
  }

  initPlayer(): void {
    this.playerIsReady = true;
  }

  close(): void {
    this.expanded = false;
    this.playerIsReady = false;
    this.scrollService.scrollSelectors['#box-office'].update();
  }
}
