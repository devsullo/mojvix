import { BlurbsService } from './../blurbs.service';
import { Component, OnInit } from '@angular/core';
import { IBlurb } from '../blurb';

@Component({
  selector: 'app-blurbs',
  templateUrl: './blurbs.component.html',
  styleUrls: ['./blurbs.component.scss']
})
export class BlurbsComponent implements OnInit {
  blurbs: IBlurb[];
  constructor(
    private blurbsService: BlurbsService
  ) { }

  ngOnInit() {
    this.blurbs = this.blurbsService.getBlurbs();
  }

}
