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
  constructor(private seanceService: SeanceService, private fb: FormBuilder) {}

  ngOnInit() {
    this.blurbForm = this.fb.group({
      text: ['', Validators.required],
      color: ['green', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.seanceService.scrollBottom();
  }

  postBlurb() {
    console.log(this.blurbForm.value);
  }
}
