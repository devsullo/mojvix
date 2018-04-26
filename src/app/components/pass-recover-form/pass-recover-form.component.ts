import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-pass-recover-form',
  templateUrl: './pass-recover-form.component.html',
  styleUrls: ['./pass-recover-form.component.scss']
})
export class PassRecoverFormComponent implements OnInit {
  formErrors = {
    email: { notFound: false }
  };
  passRecoverForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  get email(): AbstractControl {
    return this.passRecoverForm.get('email');
  }
  ngOnInit() {
    this.passRecoverForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.email.valueChanges.subscribe(val => {
      if (val) {
        this.formErrors.email.notFound = false;
      }
    });
  }
  goBack() {

  }
  passRecover() {
    console.log(this.passRecoverForm);
  }
}
