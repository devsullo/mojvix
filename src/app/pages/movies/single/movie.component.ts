import { RouteService } from './../../../shared/services/route.service';
import { BlurbsService } from './../../../sidebar/blurbs/blurbs.service';
import { IMovie } from './../movie';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollService } from '../../../shared/services/scroll.service';
import { MoviesService } from '../movies.service';


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
    private routeService: RouteService,
    private moviesService: MoviesService
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

  onClose(getBlurbs?: boolean): void {
    if (getBlurbs) {
      this.blurbsService.getBlurbs();
    }
    this.expanded = false;
    this.playerIsReady = false;
    this.scrollService.scrollSelectors['#box-office'].update();
  }

  onSetHashtagFilter(hashtag: string) {
    this.moviesService.setHashtagFilter(hashtag);
  }

  onAttendToShow(movie: IMovie) {
    this.routeService.goToSeance(movie);
  }
}
