import { TransPipe } from './../../shared/pipes/trans.pipe';
import { ScrollService } from './../../shared/scroll.service';
import { JoinFormService } from './join-form.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { SeanceService } from '../../pages/seance/seance.service';
import { IMediaSubscriptions } from 'videogular2/src/core/vg-media/i-playable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})
export class JoinFormComponent implements OnInit, AfterViewInit {
  joinForm: FormGroup;
  vixnameStatus: string;
  vixnamePattern = '^[a-zA-Z0-9]{3,15}$';
  constructor(
    private fb: FormBuilder,
    private joinFormService: JoinFormService,
    private scrollService: ScrollService,
    private transPipe: TransPipe,
    private seanceService: SeanceService,
    private router: Router
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
    this.seanceService.playerReady().then(api => {
      const subscriptions: IMediaSubscriptions = api.subscriptions;
      subscriptions.canPlay.subscribe(val => {
        this.scrollService.scrollBottom('#seance-body-area');
      });
    });
  }

  ngAfterViewInit() {
    this.scrollService.scrollBottom('#seance-body-area');
  }

  formChanges(): void {
    const fild = this.joinForm.controls;
    const formState = this.formState;
    fild.vixname.valueChanges.subscribe(val => {
      if (RegExp(this.vixnamePattern).test(val)) {
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
          this.joinForm.addControl(
            'email',
            new FormControl('', [Validators.required, Validators.email])
          );
          this.joinForm.addControl(
            'password',
            new FormControl('', [Validators.required, Validators.minLength(6)])
          );
        }
      });
    }
  }

  checkVixname(val): void {
    if (this.joinFormService.checkVixname(val)) {
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
  }

  formInit(controls: any): void {
    let vixname = '';
    if (this.joinForm) {
      vixname = this.joinForm.controls.vixname.value;
    }
    const fixControls = {
      vixname: [
        vixname,
        [Validators.required, Validators.pattern(this.vixnamePattern)]
      ]
    };
    const newControls = Object.assign(fixControls, controls);
    this.joinForm = this.fb.group(newControls);
    this.formChanges();
  }

  join() {
    console.log(this.joinForm);
  }

  fbConnect() {}

  loadPassRecoverFrom() {
    const url = this.router.url.split('/');
    if (url[1] === 'seance') {
      this.router.navigate(['seance/' + url[2] + '/password-recover']);
    } else {
      this.router.navigate(['password-recover']);
    }
  }
}
