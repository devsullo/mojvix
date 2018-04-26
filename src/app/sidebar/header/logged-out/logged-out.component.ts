import { RouteService } from './../../../shared/services/route.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-out',
  templateUrl: './logged-out.component.html',
  styleUrls: ['./logged-out.component.scss']
})
export class LoggedOutComponent implements OnInit {
  constructor(
    private routeService: RouteService
  ) {}

  ngOnInit() {}

  joinNow() {
    this.routeService.navigateSeanceOrMain('join');
  }
}
