import { INavigation } from './../../../store/interfaces/navigation';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
// import { LoggedInActions } from './logged-in.actions';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../../store';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {
  navigation: INavigation;
  constructor(
    // private loggedInActions: LoggedInActions,
    private ngRedux: NgRedux<IAppState>
  ) {}

  ngOnInit() {
    this.navigation = this.ngRedux.getState().navigation;
  }

  changeNavigationTab(tab: string) {
    this.ngRedux.dispatch({ type: 'CHANGE_ACTIVE_TAB', tab });
    // this.loggedInActions.changeNavigationTab(tab);
  }
}
