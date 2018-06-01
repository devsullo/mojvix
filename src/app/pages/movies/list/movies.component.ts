import { element } from 'protractor';
import { MovieComponent } from './../single/movie.component';
import { ScrollService } from './../../../shared/services/scroll.service';
import { Component, OnInit, HostListener, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { IMovie } from '../movie';
import { MoviesService } from '../movies.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[];
  pageHeight: number;
  scroll: any;
  colls = 3;
  scrollTopVal = 0;
  expandedMovie: MovieComponent;
  @ViewChildren('expandArea') expandArea: QueryList<MovieComponent>;

  constructor(
    private moviesService: MoviesService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.moviesService
      .getMovies()
      .map(res => res.data.movies)
      .subscribe(movies => {
        console.log(movies);
        this.movies = movies;
      });

    this.calcScrollHeight();
    this.scroll = this.scrollService.init('#box-office');

    this.scroll.element.addEventListener('ps-scroll-y', () => {
      if (this.scroll.scrollbarYRail.offsetTop === this.scrollTopVal || this.scroll.reach.y) {
        this.expandedMovie.initPlayer();
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calcScrollHeight();
    this.scroll.update();
  }

  calcScrollHeight(): void {
    this.pageHeight = window.innerHeight - 112;
    const boxOfficeEl =  document.querySelector('#box-office');
    if (boxOfficeEl.clientWidth > 1240) {
      this.colls = 4;
    } else {
      this.colls = 3;
    }
  }

  expandMovie(i: number): void {
    if (isPlatformBrowser) {
      let row = 0;
      const T = (i + 1) / this.colls;
      if (Number.isInteger(T)) {
        row = T - 1;
      } else {
        row = Math.floor(T);
      }
      this.closeAllExpandAreas();
      this.expandedMovie = this.expandArea.toArray()[row];
      this.expandedMovie.show(i + 1, this.colls, this.movies[i]);
      // TO DO: wait el expand
      setTimeout(() => {
        this.scrollTopVal = Math.floor(document
            .querySelector('#expanded-movie')
            .documentOffsetTop() - window.innerHeight / 2 + 112);
        this.scroll.element.scrollTo({
          top: this.scrollTopVal,
          behavior: 'smooth'
        });
        if (this.scroll.scrollbarYRail.offsetTop === this.scrollTopVal) {
          this.expandedMovie.initPlayer();
        }
      });
    }
  }

  closeAllExpandAreas(): void {
    this.expandArea.forEach( el => el.close() );
  }

  detectExpandArea(i: number, length: number): boolean {
    if (length % this.colls !== 0) {
      if (i === length) {
        return true;
      }
    }
    if (i % this.colls === 0) {
      return true;
    }
  }
}
