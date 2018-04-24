import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-logged-out',
  templateUrl: './logged-out.component.html',
  styleUrls: ['./logged-out.component.scss']
})
export class LoggedOutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  joinNow() {
    const url = this.router.url.split('/');
    if (url[1] === 'seance') {
      this.router.navigate(['seance/' + url[2] + '/join']);
    } else {
      this.router.navigate(['join']);
    }
  }
}
