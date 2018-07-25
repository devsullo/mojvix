import { Router } from '@angular/router';
import { BlurbsService } from './../../../sidebar/blurbs/blurbs.service';
import { IMovie } from './../movie';
import { Component, OnInit, AfterViewInit } from '@angular/core';
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
    private scrollService: ScrollService,
    private blurbsService: BlurbsService,
    private router: Router
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

  show(i: number, calls: number, movie: IMovie): void {
    this.movie = movie;
    this.blurbsService.getBlurbs(`movieId:${movie.id}`);
    this.scrollService.scrollTop('#blurbs-list');
    const boxOffice = document.querySelector('#box-office');
    const movieWidth = document.querySelector('.movie').clientWidth;
    const rowNum = i % calls || calls;
    const moviePadding = (boxOffice.clientWidth * 2.3) / 100;
    const halfPoster = movieWidth / 2;
    this.arrowMarginLeft =
      rowNum * movieWidth -
      halfPoster -
      10 +
      rowNum * moviePadding -
      moviePadding;
    this.expanded = true;
  }

  initPlayer(): void {
    this.playerIsReady = true;
  }

  close(getBlurbs?: boolean): void {
    if (getBlurbs) {
      this.blurbsService.getBlurbs();
    }
    this.expanded = false;
    this.playerIsReady = false;
    this.scrollService.scrollSelectors['#box-office'].update();
  }

  attendToShow(movie: IMovie) {
    // TO DO
    const user = true;
    let urlEnd = '';
    if (!user) {
      urlEnd = '/join';
    }
    this.router.navigate([`/seance/${movie.slug}/${movie.id + urlEnd}`]);
  }
}
