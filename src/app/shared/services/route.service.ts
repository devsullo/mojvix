import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class RouteService {
  pageUrl = [];
  constructor(private router: Router) {}

  monitorRoute() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.pageUrl = e.url.split('/');
        if (this.pageUrl[1] !== 'seance') {
          console.log('Remove chat component');
        }
      }
    });
  }
  navigateSeanceOrMain(location: string): void {
    if (this.pageUrl[1] === 'seance') {
      this.router.navigate([`seance/${this.pageUrl[2]}/${location}`]);
    } else {
      this.router.navigate([location]);
    }
  }
}

