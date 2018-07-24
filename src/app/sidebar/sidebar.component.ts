import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, HostListener } from '@angular/core';

import * as fromNavigation from '../sidebar/header/navigation/store/navigation.reducer';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navigationState: Observable<fromNavigation.State>;
  scrollHeight: number;
  constructor(
    private store: Store<fromNavigation.State>
  ) {}

  ngOnInit() {
    this.navigationState = this.store.select('navigation');
    this.calcScrollHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calcScrollHeight();
  }

  calcScrollHeight() {
    this.scrollHeight = window.innerHeight - 61;
  }
}
