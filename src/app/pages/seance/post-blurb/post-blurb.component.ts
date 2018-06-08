import { RouteService } from './../../../shared/services/route.service';
import { ISeance } from './../../../store/model/seance';
import { IAppState } from './../../../store/IAppState';
import { Location } from '@angular/common';
import { PostBlurbService } from './post-blurb.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { SeanceService } from '../seance.service';
import { NgRedux } from 'ng2-redux';
import { Unsubscribe } from 'redux';

@Component({
  selector: 'app-post-blurb',
  templateUrl: './post-blurb.component.html',
  styleUrls: ['./post-blurb.component.scss']
})
export class PostBlurbComponent implements OnInit, AfterViewInit, OnDestroy {
  blurbForm: FormGroup;
  constructor(
    private seanceService: SeanceService,
    private fb: FormBuilder,
    private postBlurbService: PostBlurbService,
    private location: Location,
    private ngRedux: NgRedux<IAppState>,
    private routeService: RouteService
  ) {}

  get seance(): ISeance {
    return this.ngRedux.getState().seance;
  }

  ngOnInit() {
    this.blurbForm = this.fb.group({
      content: ['', Validators.required],
      color: ['GREEN', Validators.required]
    });
  }

  ngOnDestroy() { }

  ngAfterViewInit() {
    this.seanceService.scrollBottom();
  }

  postBlurb() {
    this.postBlurbService
      .createBlurb(this.blurbForm.value, this.seance.id)
      .map(res => res.data.createBlurb)
      .subscribe(id => {
        this.routeService.navigateSeance('');
      });
  }

  cancel() {
    this.location.back();
  }
}
