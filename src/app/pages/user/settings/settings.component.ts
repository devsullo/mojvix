import { UserService } from './../user.service';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { map, take } from 'rxjs/operators';
const SETTINGS = window['VIX_SETTINGS'] || {};

import * as fromApp from '../../../store/app.reducers';
import * as userActions from './../store/user.actions';
import { AuthService } from '../../../shared/services/auth.service';

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
  user: User;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromApp.AppState>,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.store.select('user')
    .subscribe(user => {
      this.user = user;
      if (user) {
        this.initForms(this.user);
      }
    });
  }

  initForms(user: User) {
    const userInfo = user.info;
    this.generalForm = this.fb.group({
      info: this.fb.group({
        firstName: [userInfo.firstName],
        lastName: [userInfo.lastName],
        age: [userInfo.age],
        sex: [userInfo.sex]
        // bio: ['']
      })
    });

    this.emailForm = this.fb.group({
      email: [user.email],
      password: ['']
    });
  }

  OnUpdateInfo() {
    const formValue = this.generalForm.value;
    this.userService.updateUserInfo(formValue)
      .pipe(map(r => r.data.updateUserInfo))
      .subscribe(user => {
        const sUser = this.user;
        this.store.dispatch(new userActions.SetUser({ ...sUser, ...user }));
        alert('Settings changed');
      }, error => {
        alert(error);
        debug.log(error);
      });
  }

  OnUpdateEmail() {
    const formValue = this.emailForm.value;
    this.userService.updateUserEmail(formValue)
      .pipe(map(r => r.data.updateUserEmail))
      .subscribe(email => {
        const sUser = this.user;
        this.store.dispatch(new userActions.SetUser({ ...sUser, ...email }));
        alert('Email changed');
      }, error => {
        alert(error);
        debug.log(error);
      });
  }

  changeFormState(formName: string) {
    this.formsState[formName] = !this.formsState[formName];
  }
}
