import { IAppState } from './../../store/IAppState';
import { NgRedux } from 'ng2-redux';
import { Injectable } from '@angular/core';

@Injectable()
export class HeaderNavigationActions {
  constructor(private ngRedux: NgRedux<IAppState>) {}

  changeNavigationTab(tab: string) {
    this.ngRedux.dispatch({
      type: 'CHANGE_ACTIVE_TAB',
      tab
    });
  }
}
