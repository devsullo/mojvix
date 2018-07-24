import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromNavigation from './store/navigation.reducer';
import * as NavigationActions from './store/navigation.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigationState: Observable<fromNavigation.State>;
  constructor(
    private store: Store<fromNavigation.State>,
  ) {}

  ngOnInit() {
    this.navigationState = this.store.select('navigation');
  }

  changeNavigationTab(tab: string) {
    this.store.dispatch(new NavigationActions.ChangeNavTab(tab));
  }
}
