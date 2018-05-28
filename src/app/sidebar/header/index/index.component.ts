import { IAppState } from './../../../store/IAppState';
import { NgRedux } from 'ng2-redux';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../store/model/user';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  user: IUser;
  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    this.ngRedux.subscribe(() => {
      this.user = this.ngRedux.getState().user;
    });
  }
}
