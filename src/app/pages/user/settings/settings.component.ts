import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  AGEOPTIONS = ['13-17', '18-23', '24+'];
  SEXOPTIONS = ['Male', 'Female'];
  metaForm: FormGroup;
  emailForm: FormGroup;
  formsState = {
    metaForm: false,
    emailForm: false
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.metaForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      age: [''],
      sex: [''],
      bio: ['']
    });

    this.emailForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  updateMeta() {
    console.log(this.metaForm.value);
  }

  updateEmail() {
    console.log(this.emailForm.value);
  }

  changeFormState(formName: string) {
    this.formsState[formName] = !this.formsState[formName];
  }
}
