import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Injectable()
export class LoggedOutGuardService {
  constructor(
    private authService: AuthService,
    private routeService: RouteService
  ) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      return true;
    } else {
      this.routeService.navigateSeanceOrMain('');
      return false;
    }
  }
}
