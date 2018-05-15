import { INavigation } from './../../../store/interfaces/navigation';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { NgRedux } from 'ng2-redux';
import { IAppState, store, HeaderNavigationActions } from '../../../store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigation: INavigation;
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private headerNavigationActions: HeaderNavigationActions
  ) {}

  ngOnInit() {
    this.navigation = this.ngRedux.getState().navigation;
  }

  changeNavigationTab(tab: string) {
    this.headerNavigationActions.changeNavigationTab(tab);
  }
}
