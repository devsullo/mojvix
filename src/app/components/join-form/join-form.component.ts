import { JoinFormService } from './join-form.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})
export class JoinFormComponent implements OnInit {
  joinForm: FormGroup;
  vixnamePattern = '^[a-zA-Z0-9]{3,15}$';
  constructor(
    private fb: FormBuilder,
    private joinFormService: JoinFormService
  ) {}

  get formState(): AbstractControl {
    return this.joinForm.get('state');
  }

  ngOnInit() {
    this.formInit({
      age: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      anonymus: false,
      state: 0
    });
  }

  formChanges(): void {
    const fild = this.joinForm.controls;
    const formState = this.formState;
    fild.vixname.valueChanges.subscribe(val => {
      if (RegExp(this.vixnamePattern).test(val)) {
        this.checkVixname(val);
      } else {
        fild.anonymus.setValue(false);
        if (formState.value !== 0) {
          formState.setValue(0);
        }
      }
    });
    if (formState.value >= 0) {
      fild.age.valueChanges.subscribe(val => {
        if (val && formState.value !== 3) {
          formState.setValue(2);
        }
      });
      fild.sex.valueChanges.subscribe(val => {
        if (val) {
          formState.setValue(3);
        }
      });
      fild.anonymus.valueChanges.subscribe(val => {
        if (val) {
          this.joinForm.addControl('email', new FormControl('', Validators.required));
          this.joinForm.addControl('password', new FormControl('', Validators.required));
        }
      });
    }
  }

  checkVixname(val): void {
    if (this.joinFormService.checkVixname(val)) {
      if (this.formState.value < 1) {
        this.formInit({
          age: ['', Validators.required],
          sex: ['', Validators.required],
          anonymus: false,
          state: 1
        });
      }
    } else {
      this.formInit({
        password: ['', Validators.required],
        anonymus: false,
        state: -1
      });
    }
  }

  formInit(controls: any): void {
    let vixname = '';
    if (this.joinForm) {
      vixname = this.joinForm.controls.vixname.value;
    }
    const fixControls = { vixname: [vixname, [Validators.required, Validators.pattern(this.vixnamePattern)]] };
    const newControls = Object.assign(fixControls, controls);
    this.joinForm = this.fb.group(newControls);
    this.formChanges();
  }

  join() {
    console.log(this.joinForm);
  }

  fbConnect() {}
}
