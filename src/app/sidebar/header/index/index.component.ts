import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as fromUser from '../../../pages/user/store/user.reducer';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  user: fromUser.State;
  constructor(private store: Store<fromUser.State>) {}

  ngOnInit() {
    // this.user = this.store.
    this.store.select('').subscribe(user => {
      console.log('>>', user)
      this.user = user;
    });
  }
}
