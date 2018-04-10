import { Component, OnInit } from '@angular/core';
import { ITitle } from '../title';
import { TitlesService } from '../titles.service';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {
  titles: ITitle[];

  constructor(
    private titleService: TitlesService
  ) { }

  ngOnInit() {
    this.titles = this.titleService.getTitles();
    console.log( this.titles );
  }

}
