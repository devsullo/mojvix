import { Location } from '@angular/common';
import { PostBlurbService } from './post-blurb.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SeanceService } from '../seance.service';

@Component({
  selector: 'app-post-blurb',
  templateUrl: './post-blurb.component.html',
  styleUrls: ['./post-blurb.component.scss']
})
export class PostBlurbComponent implements OnInit, AfterViewInit {
  blurbForm: FormGroup;
  constructor(
    private seanceService: SeanceService,
    private fb: FormBuilder,
    private postBlurbService: PostBlurbService,
    private location: Location
  ) {}

  ngOnInit() {
    this.blurbForm = this.fb.group({
      content: ['', Validators.required],
      color: ['GREEN', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.seanceService.scrollBottom();
  }

  postBlurb() {
    console.log(this.blurbForm.value);
    this.postBlurbService.createBlurb(this.blurbForm.value, 6)
    .map(res => res.data.createBlurb)
    .subscribe(id => {});
  }

  cancel() {
    this.location.back();
  }
}
