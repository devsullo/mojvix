import { INavigation } from './../../../store/model/navigation';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { NgRedux } from 'ng2-redux';
import { IAppState, store } from '../../../store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigation: INavigation;
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.navigation = this.ngRedux.getState().navigation;
  }

  changeNavigationTab(tab: string) {
    this.headerService.changeNavigationTab(tab);
  }
}
