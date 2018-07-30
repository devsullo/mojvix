import { Store } from '@ngrx/store';
import { RouteService } from './../../../shared/services/route.service';
import { Location } from '@angular/common';
import { PostBlurbService } from './post-blurb.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { SeanceService } from '../seance.service';
import { map } from 'rxjs/operators';
import { Seance } from '../seance.model';

import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-post-blurb',
  templateUrl: './post-blurb.component.html',
  styleUrls: ['./post-blurb.component.scss']
})
export class PostBlurbComponent implements OnInit, AfterViewInit, OnDestroy {
  blurbForm: FormGroup;
  seance: Seance;
  constructor(
    private seanceService: SeanceService,
    private fb: FormBuilder,
    private postBlurbService: PostBlurbService,
    private location: Location,
    private routeService: RouteService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.blurbForm = this.fb.group({
      content: ['', Validators.required],
      color: ['GREEN', Validators.required]
    });
    this.store.select('seance').subscribe(s => (this.seance = s));
  }

  ngOnDestroy() {}

  ngAfterViewInit() {
    this.seanceService.scrollBottom();
  }

  postBlurb() {
    if (this.blurbForm.invalid) {
      return;
    }
    this.postBlurbService
      .createBlurb(this.blurbForm.value, this.seance.id)
      .pipe(map(res => res.data.createBlurb))
      .subscribe(id => {
        this.routeService.navigateSeance('');
      });
  }

  cancel() {
    this.location.back();
  }
}
