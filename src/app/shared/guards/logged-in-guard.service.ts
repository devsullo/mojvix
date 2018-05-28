import { RouteService } from './../services/route.service';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoggedInGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private routeService: RouteService
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.routeService.navigateSeanceOrMain('');
      return false;
    }
  }
}
