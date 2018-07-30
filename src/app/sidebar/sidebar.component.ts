import { Store } from '@ngrx/store';
import { Component, OnInit, HostListener } from '@angular/core';

import * as fromApp from '../store/app.reducers';
import { Navigation } from './header/navigation/navigation.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navigationState: Navigation;
  scrollHeight: number;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store.select('navigation').subscribe(state => {
      this.navigationState = state;
    });
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
