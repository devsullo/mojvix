import { RouteService } from './route.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(
    private routeService: RouteService
  ) { }

  logIn(token: string) {
    localStorage.setItem('token', token);
    this.routeService.navigateSeanceOrMain('');
  }

  logOut() {
    localStorage.removeItem('token');
    this.routeService.navigateSeanceOrMain('join');
  }
}
