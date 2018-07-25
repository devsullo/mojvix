import { Store } from '@ngrx/store';
import { HeaderService } from './../../sidebar/header/header.service';
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
    private headerService: HeaderService,
    private store: Store<fromUser.State>
  ) {
    const token = localStorage.getItem('token');
    if (token) {
      const user = this.jwtHelperService.decodeToken(token);
      this.store.dispatch(new UserActions.SetUser(user));
    }
  }

  logIn(token: string) {
    const user = this.jwtHelperService.decodeToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.store.dispatch(new UserActions.SetUser(user));
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
    const token = localStorage.getItem('token');
    // TODO : this.jwtHelperService.isTokenExpired(token)
    if (token) {
      return true;
    }
    return false;
  }
}
