import { FormBuilder, FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Helper } from './../../../shared/helper';
import { BlurbsService } from './../../../sidebar/blurbs/blurbs.service';
import { element } from 'protractor';
import { MovieComponent } from './../single/movie.component';
import { ScrollService } from './../../../shared/services/scroll.service';
import { Component, OnInit, HostListener, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { IMovie } from '../movie';
import { MoviesService } from '../movies.service';
import { isPlatformBrowser } from '@angular/common';
import { map } from 'rxjs/operators';

const SETTINGS = window['VIX_SETTINGS'] || {};

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
  expandedMovieI: number;
  sortFilterForm: FormGroup;
  MOVIE_MOODS = SETTINGS.MOVIE_MOODS;
  MOVIE_SORTS = SETTINGS.MOVIE_SORTS;
  showChooseMoods = false;

  @ViewChildren('expandArea') expandArea: QueryList<MovieComponent>;

  constructor(
    private moviesService: MoviesService,
    private scrollService: ScrollService,
    private blurbsService: BlurbsService,
    private helper: Helper,
    private fb: FormBuilder
  ) {}

  get moodFilters(): FormArray {
    return <FormArray>this.sortFilterForm.get('moodFilters');
  }

  get sortName(): string {
    return this.sortFilterForm.get('sortName').value;
  }

  get hashtagFilter(): AbstractControl {
    return this.sortFilterForm.get('hashtagFilter');
  }

  ngOnInit() {
    this.sortFilterForm = this.fb.group({
      sortName: [this.MOVIE_SORTS[0]],
      moodFilters: [[]],
      hashtagFilter: ['']
    });

    this.moviesService.$hashtagFilterSub.subscribe(hashtag => {
      this.hashtagFilter.setValue(hashtag);
    });

    this.sortFilterForm.get('sortName').valueChanges.subscribe(() => {
      this.onSortFilterForm();
    });

    this.hashtagFilter.valueChanges.subscribe(() =>
      this.onSortFilterForm()
    );

    this.moviesService
      .getMovies()
      .pipe(map(res => res.data.movies))
      .subscribe(movies => {
        console.log(movies);
        this.movies = movies;
      });

    this.calcScrollHeight();
    this.scroll = this.scrollService.init('#box-office');

    this.scroll.element.addEventListener('ps-scroll-y', () => {
      if (
        this.scroll.scrollbarYRail.offsetTop === this.scrollTopVal ||
        this.scroll.reach.y
      ) {
        this.expandedMovie.initPlayer();
      }
    });
  }

  toggleMood(mood: string) {
    const arr = this.moodFilters.value;
    const T = arr.indexOf(mood);
    if (T > -1) {
      arr.splice(T, 1);
    } else {
      arr.push(mood);
    }
    this.moodFilters.setValue(arr);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calcScrollHeight();
    this.scroll.update();
  }

  calcScrollHeight(): void {
    this.pageHeight = window.innerHeight - 112;
    this.colls = this.helper.getMoviePosterColls('#box-office');
  }

  onSortFilterForm() {
    setTimeout(() => {
      const formValue = this.sortFilterForm.value;
      console.log(formValue);
      this.showChooseMoods = false;
    }, 1);
  }

  onChooseMoods() {
    this.showChooseMoods = true;
  }

  onHashtagFilterClose() {
    this.moviesService.setHashtagFilter('');
  }

  onExpandMovie(i: number): void {
    if (isPlatformBrowser) {
      let row = 0;
      const T = (i + 1) / this.colls;
      if (Number.isInteger(T)) {
        row = T - 1;
      } else {
        row = Math.floor(T);
      }
      this.closeAllExpandAreas();
      if (this.expandedMovieI === i) {
        this.blurbsService.getBlurbs();
        this.expandedMovieI = null;
        return;
      }
      this.expandedMovieI = i;
      this.expandedMovie = this.expandArea.toArray()[row];
      this.expandedMovie.show(i + 1, this.colls, this.movies[i]);
      // TO DO: wait el expand
      setTimeout(() => {
        this.scrollTopVal = Math.floor(
          document.querySelector('#expanded-movie').documentOffsetTop() -
            window.innerHeight / 2 +
            112
        );
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
    this.expandArea.forEach(el => el.onClose());
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
