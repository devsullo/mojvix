import { IAppState } from './../../store/IAppState';
import { RouteService } from './route.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgRedux } from 'ng2-redux';
import { IUser } from '../../store/model/user';
export const SET_USER = 'SET_USER';

@Injectable()
export class AuthService {
  constructor(
    private routeService: RouteService,
    private jwtHelperService: JwtHelperService,
    private ngRedux: NgRedux<IAppState>
  ) {}

  logIn(token: string) {
    const user = this.jwtHelperService.decodeToken(token);
    localStorage.setItem('token', token);
    this.setUser(user);
    this.routeService.navigateSeanceOrMain('');
  }

  logOut() {
    localStorage.removeItem('token');
    this.setUser(null);
    this.routeService.navigateSeanceOrMain('join');
  }

  setUser(user: IUser) {
    const action = { type: SET_USER, user };
    this.ngRedux.dispatch(action);
  }
}
