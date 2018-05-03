import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {
  profileNavTab = 'seanceChat';
  constructor() {}

  ngOnInit() {}

  changeProfileNavTab(tab: string) {
    this.profileNavTab = tab;
  }
}
