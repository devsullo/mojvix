import { AuthService } from './../../shared/services/auth.service';
import { RouteService } from './../../shared/services/route.service';
import { TransPipe } from './../../shared/pipes/trans.pipe';
import { ScrollService } from './../../shared/services/scroll.service';
import { JoinFormService } from './join-form.service';
import { Component, OnInit, AfterViewInit, QueryList, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { SeanceService } from '../../pages/seance/seance.service';
import { IMediaSubscriptions } from 'videogular2/src/core/vg-media/i-playable';
import { ActivatedRoute } from '@angular/router';
import { FormErrorBoxComponent } from '../form-error-box/form-error-box.component';
const SETTINGS = window['VIX_SETTINGS'] || {};

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})
export class JoinFormComponent implements OnInit, AfterViewInit {
  joinForm: FormGroup;
  vixnameStatus: string;
  formStyle: 'dark';
  VIXNAME_PATTERN = SETTINGS.VIXNAME_PATTERN;
  AGE_OPTIONS = SETTINGS.AGE_OPTIONS;
  SEX_OPTIONS = SETTINGS.SEX_OPTIONS;
  @ViewChild(FormErrorBoxComponent) private errorBox: FormErrorBoxComponent;

  constructor(
    private fb: FormBuilder,
    private joinFormService: JoinFormService,
    private scrollService: ScrollService,
    private transPipe: TransPipe,
    private seanceService: SeanceService,
    private routeService: RouteService,
    private route: ActivatedRoute,
    private authService: AuthService
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
    this.route.data.subscribe(data => {
      this.formStyle = data.formStyle;
    });
  }

  ngAfterViewInit() {
    this.seanceService.scrollBottom();
  }

  formChanges(): void {
    const fild = this.joinForm.controls;
    const formState = this.formState;
    fild.vixname.valueChanges.subscribe(val => {
      if (RegExp(this.VIXNAME_PATTERN).test(val)) {
        this.checkVixname(val);
      } else {
        this.vixnameStatus = '';
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
          this.seanceService.scrollBottom();
          this.joinForm.addControl(
            'email',
            new FormControl('', [Validators.required, Validators.email])
          );
          this.joinForm.addControl(
            'password',
            new FormControl('', [Validators.required, Validators.minLength(6)])
          );
        } else {
          this.joinForm.removeControl('email');
          this.joinForm.removeControl('password');
        }
      });
      fild.state.valueChanges.subscribe(val => {});
    }
  }

  checkVixname(val): void {
    this.joinFormService
      .checkVixname(val)
      .map(res => res.data.checkVixname)
      .subscribe(data => {
        if (data.available) {
          this.vixnameStatus = this.transPipe.transform('vixname-available');
          if (this.formState.value < 1) {
            this.formInit({
              age: ['', Validators.required],
              sex: ['', Validators.required],
              anonymus: false,
              state: 1
            });
          }
        } else {
          this.vixnameStatus = '';
          this.formInit({
            password: ['', Validators.required],
            anonymus: false,
            state: -1
          });
        }
      });
  }

  formInit(controls: any): void {
    let vixname = '';
    if (this.joinForm) {
      vixname = this.joinForm.controls.vixname.value;
    }
    const fixControls = {
      vixname: [
        vixname,
        [Validators.required, Validators.pattern(this.VIXNAME_PATTERN)]
      ]
    };
    const newControls = Object.assign(fixControls, controls);
    this.joinForm = this.fb.group(newControls);
    this.formChanges();
  }

  join(): void {
    const formValue = this.joinForm.value;
    const state = formValue.state;
    if (state === -1) {
      this.login(formValue);
    } else {
      this.register(formValue);
    }
  }

  login(formValue: any) {
    formValue.username = formValue.vixname;
    this.joinFormService.login(formValue).subscribe(
      res => {
        this.authService.logIn(res.accessToken);
      },
      err => {
        this.errorBox.show(err);
      }
    );
  }

  register(formValue: any) {
    this.joinFormService.register(formValue).subscribe(
      res => {
        this.authService.logIn(res.accessToken);
      },
      err => {
        this.errorBox.show(err);
      }
    );
  }

  fbConnect() {}

  loadPassRecoverFrom() {
    this.routeService.navigateSeanceOrMain('password-recover');
  }
}
