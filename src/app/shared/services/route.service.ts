import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import * as fromUser from '../../pages/user/store/user.reducer';
import * as fromApp from '../../store/app.reducers';
import * as RouterActions from '../../store/router/router.actions';
import { IMovie } from '../../pages/movies/movie';

@Injectable()
export class RouteService {
  pageUrl = [];
  user: fromUser.State;

  constructor(private router: Router, private store: Store<fromApp.AppState>) {
    this.store.select('user').subscribe(user => (this.user = user));
  }

  navigate(payload: RouterActions.IGoPayload) {
    this.store.dispatch(new RouterActions.Go(payload));
  }

  navigateBack() {
    this.store.dispatch(new RouterActions.Back());
  }

  navigateForward() {
    this.store.dispatch(new RouterActions.Forward());
  }

  monitorRoute() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.pageUrl = e.url.split('/');
      }
    });
  }
  navigateSeanceOrMain(location: string): void {
    if (this.pageUrl[1] === 'seance') {
      this.navigateSeance(location);
    } else {
      this.navigate({ path: [location] });
    }
  }
  navigateSeance(location: string): void {
    const path = `seance/${this.pageUrl[2]}/${this.pageUrl[3]}/${location}`;
    this.navigate({ path: [path] });
  }
  goToSeance(movie: IMovie) {
    let urlEnd;
    this.user ? (urlEnd = '') : (urlEnd = '/join');
    const path = `/seance/${movie.slug}/${movie.id + urlEnd}`;
    this.navigate({ path: [path] });
  }
}

