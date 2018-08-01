import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Navigation } from './navigation.model';

import * as NavigationActions from './store/navigation.actions';
import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigationState: Observable<Navigation>;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.navigationState = this.store.select('navigation');
  }

  changeNavigationTab(index: number) {
    this.store.dispatch(new NavigationActions.ChangeNavTab(index));
  }
}
