import { RouteService } from './../../shared/services/route.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Location } from '@angular/common';

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
  formStyle: 'dark';
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private routeService: RouteService
  ) {}

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
    this.route.data.subscribe(data => {
      this.formStyle = data.formStyle;
    });
  }

  goBack(): void {
    this.routeService.navigateBack();
  }

  passRecover() {
    console.log(this.passRecoverForm);
  }
}
