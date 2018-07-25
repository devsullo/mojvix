import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as fromUser from '../store/user.reducer';
import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: fromUser.State;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store.select('user').subscribe(user => (this.user = user));
  }
}
