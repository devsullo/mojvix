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
    this.formInit();
    this.formChanges();
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
    formState.valueChanges.subscribe(val => {});
  }

  checkVixname(val): void {
    const fild = this.joinForm.controls;
    const formState = this.formState;
    if (this.joinFormService.checkVixname(val)) {
      if (formState.value < 1) {
        formState.setValue(1);
        fild.age.setValue('');
        fild.sex.setValue('');
      }
    } else {
      formState.setValue(-1);
      fild.password.setValue('');
      fild.anonymus.setValue(false);
    }
  }

  formInit(): void {
    this.joinForm = this.fb.group({
      vixname: [
        '',
        [Validators.required, Validators.pattern(this.vixnamePattern)]
      ],
      age: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      email: [''],
      password: '',
      anonymus: false,
      state: 0
    });
  }

  join() {
    console.log(this.joinForm);
  }

  fbConnect() {}
}
