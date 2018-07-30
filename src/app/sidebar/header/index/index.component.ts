import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { User } from '../../../pages/user/user.model';
import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  user: User;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store.select('user').subscribe(user => {
      this.user = user;
    });
  }
}
