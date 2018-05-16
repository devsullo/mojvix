import { Injectable } from '@angular/core';
import { IAppState } from '../../store/IAppState';
import { NgRedux } from 'ng2-redux';
export const CHANGE_NAV_TAB = 'SIDEBAR_HEADER_CHANGE_NAV_TAB';

@Injectable()
export class HeaderService {
  constructor(private ngRedux: NgRedux<IAppState>) {}

  changeNavigationTab(tab: string) {
    const action = { type: CHANGE_NAV_TAB, tab };
    this.ngRedux.dispatch(action);
  }
}
