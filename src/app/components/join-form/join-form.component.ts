import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})
export class JoinFormComponent implements OnInit {
  joinForm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.formValidate('init');
  }

  private formValidate(control) {
    let data;
    let formVal;
    if (typeof this.joinForm !== 'undefined') {
      formVal = this.joinForm.value;
    }
    const vixnamePattern = '^[a-zA-Z0-9]+$';

    switch (control) {
      case 'init':
        data = {
          vixname: [
            null,
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(15),
              Validators.pattern(vixnamePattern)
            ]
          ],
          age: [null, [Validators.required]],
          sex: [null, [Validators.required]],
          email: null,
          password: null,
          anonymus: false
        };
        break;

      case 'free':
        data = {
          vixname: [
            formVal.vixname,
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(15),
              Validators.pattern(vixnamePattern)
            ]
          ],
          age: [formVal.age, [Validators.required]],
          sex: [formVal.sex, [Validators.required]],
          email: formVal.email,
          password: null,
          anonymus: false
        };
        break;

      case 'signIn':
        data = {
          vixname: [
            formVal.vixname,
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(15),
              Validators.pattern(vixnamePattern)
            ]
          ],
          age: formVal.age,
          sex: formVal.sex,
          email: formVal.email,
          password: [null, [Validators.required, Validators.minLength(6)]],
          anonymus: false
        };
        break;

      case 'take':
        data = {
          vixname: [
            formVal.vixname,
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(15),
              Validators.pattern(vixnamePattern)
            ]
          ],
          age: [formVal.age, [Validators.required]],
          sex: [formVal.sex, [Validators.required]],
          email: [formVal.email, [Validators.required, Validators.email]],
          password: [null, [Validators.required, Validators.minLength(6)]],
          anonymus: true
        };
        break;
    }

    this.joinForm = this.fb.group(data);
  }
}
