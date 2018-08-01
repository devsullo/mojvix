import { Store } from '@ngrx/store';
import { RouteService } from './route.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../../pages/user/user.model';

import * as UserActions from './../../pages/user/store/user.actions';
import * as NavigationActions from './../../sidebar/header/navigation/store/navigation.actions';

@Injectable()
export class AuthService {
  constructor(
    private routeService: RouteService,
    private jwtHelperService: JwtHelperService,
    private store: Store<User>
  ) {
    this.isAuthenticated()
      ? this.store.dispatch(new UserActions.SetUser(this.user))
      : this.store.dispatch(new UserActions.UnsetUser());
  }

  get token(): string {
    return localStorage.getItem('token') || null;
  }

  get user(): User {
    return this.jwtHelperService.decodeToken(this.token);
  }

  logIn(token: string) {
    const user = this.user;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.store.dispatch(new UserActions.SetUser(user));
    this.routeService.navigateSeanceOrMain('');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.store.dispatch(new UserActions.UnsetUser());
    this.store.dispatch(new NavigationActions.ChangeNavTab(1));
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
