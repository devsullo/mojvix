import { Store } from '@ngrx/store';
import { RouteService } from './route.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import * as UserActions from './../../pages/user/store/user.actions';
import * as fromUser from '../../pages/user/store/user.reducer';
import * as NavigationActions from './../../sidebar/header/navigation/store/navigation.actions';

@Injectable()
export class AuthService {
  constructor(
    private routeService: RouteService,
    private jwtHelperService: JwtHelperService,
    private store: Store<fromUser.State>
  ) {
    this.isAuthenticated()
      ? this.store.dispatch(new UserActions.SetUser(this.user))
      : this.store.dispatch(new UserActions.UnsetUser());
  }

  get token(): string {
    return localStorage.getItem('token') || null;
  }

  get user(): fromUser.State {
    return this.jwtHelperService.decodeToken(this.token);
  }

  logIn(token: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(this.user));
    this.store.dispatch(new UserActions.SetUser(this.user));
    this.routeService.navigateSeanceOrMain('');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.store.dispatch(new UserActions.UnsetUser());
    this.store.dispatch(new NavigationActions.ChangeNavTab('blurbs'));
    this.routeService.navigateSeanceOrMain('join');
  }

  isAuthenticated(): boolean {
    return !this.jwtHelperService.isTokenExpired(this.token);
  }

  getAuthorizationHeader(): any {
    if (this.token) {
      return { Authorization: `Bearer ${this.token}` };
    } else {
      return {};
    }
  }
}
