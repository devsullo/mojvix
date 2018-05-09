import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header/header.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navigationTab: string;
  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.headerService.$navigationTab.subscribe(tab => {
      this.navigationTab = tab;
    });
  }

}
