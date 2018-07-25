import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as fromUser from '../../../pages/user/store/user.reducer';
import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  user: fromUser.State;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store.select('user').subscribe(user => {
      this.user = user;
    });
  }
}
