import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
const SETTINGS = window['VIX_SETTINGS'] || {};

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  AGE_OPTIONS = SETTINGS.AGE_OPTIONS;
  SEX_OPTIONS = SETTINGS.SEX_OPTIONS;
  generalForm: FormGroup;
  emailForm: FormGroup;
  formsState = {
    generalForm: true,
    emailForm: false
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.generalForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      age: [''],
      sex: ['']
      // bio: ['']
    });

    this.emailForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  updateMeta() {
    console.log(this.generalForm.value);
  }

  updateEmail() {
    console.log(this.emailForm.value);
  }

  changeFormState(formName: string) {
    this.formsState[formName] = !this.formsState[formName];
  }
}
