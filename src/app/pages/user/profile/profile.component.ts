import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store.select('user').subscribe(user => (this.user = user));
  }
}
