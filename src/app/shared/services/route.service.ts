import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouteService {
  constructor(private router: Router) {}

  navigateSeanceOrMain(location: string): void {
    const url = this.router.url.split('/');
    if (url[1] === 'seance') {
      this.router.navigate([`seance/${url[2]}/${location}`]);
    } else {
      this.router.navigate([location]);
    }
  }
}

