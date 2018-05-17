import { Component, OnInit, HostListener } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { INavigation } from '../store/model/navigation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navigation: INavigation;
  scrollHeight: number;
  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    this.navigation = this.ngRedux.getState().navigation;
    this.calcScrollHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calcScrollHeight();
  }

  calcScrollHeight() {
    this.scrollHeight = window.innerHeight - 51;
  }

}
