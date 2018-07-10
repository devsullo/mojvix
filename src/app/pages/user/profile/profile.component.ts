import { Helper } from './../../../shared/helper';
import { NgRedux } from 'ng2-redux';
import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../../store';
import { IUser } from '../../../store/model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: IUser;
  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    this.user = this.ngRedux.getState().user;
  }

}
