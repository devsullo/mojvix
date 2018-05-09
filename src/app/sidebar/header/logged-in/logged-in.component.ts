import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {
  navigationTab: string;

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.$navigationTab.subscribe(tab => {
      this.navigationTab = tab;
    });
  }

  changeNavigationTab(tab: string) {
    this.headerService.changeNavigationTab(tab);
  }
}
