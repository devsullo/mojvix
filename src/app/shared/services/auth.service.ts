import { BlurbsService } from './../../sidebar/blurbs/blurbs.service';
import { Store } from '@ngrx/store';
import { RouteService } from './route.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../../pages/user/user.model';

import * as UserActions from './../../pages/user/store/user.actions';
import * as NavigationActions from './../../sidebar/header/navigation/store/navigation.actions';
import { UserService } from '../../pages/user/user.service';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  _user: User;
  reconnectWsLink = new Subject<any>();
  reconnectWsLink$ = this.reconnectWsLink.asObservable();

  constructor(
    private routeService: RouteService,
    private jwtHelperService: JwtHelperService,
    private store: Store<User>,
    private userService: UserService,
    private blurbService: BlurbsService,
  ) {
    this.isAuthenticated()
      ? this.store.dispatch(new UserActions.SetUser(this.userService.user))
      : this.store.dispatch(new UserActions.UnsetUser());
  }

  get token(): string {
    return localStorage.getItem('token') || null;
  }

  logIn(token: string) {
    localStorage.setItem('token', token);
    const user = this.jwtHelperService.decodeToken(this.token);
    this.store.dispatch(new UserActions.SetUser(user));
    this.routeService.navigateSeanceOrMain('');
    this.reconnectWsLink.next();
    this.blurbService.getBlurbs();
  }

  logOut() {
    localStorage.removeItem('token');
    this.store.dispatch(new UserActions.UnsetUser());
    this.store.dispatch(new NavigationActions.ChangeNavTab(1));
    this.routeService.navigateSeanceOrMain('join');
    this.reconnectWsLink.next();
    this.blurbService.getBlurbs();
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
