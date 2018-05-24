import { AuthService } from './../../shared/services/auth.service';
import { RouteService } from './../../shared/services/route.service';
import { TransPipe } from './../../shared/pipes/trans.pipe';
import { ScrollService } from './../../shared/services/scroll.service';
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
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})
export class JoinFormComponent implements OnInit, AfterViewInit {
  joinForm: FormGroup;
  vixnameStatus: string;
  formStyle: 'dark';
  vixnamePattern = '^[a-zA-Z0-9]{3,15}$';
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
      gender: ['', [Validators.required]],
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
      fild.gender.valueChanges.subscribe(val => {
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
      fild.state.valueChanges.subscribe(val => {

      });
    }
  }

  checkVixname(val): void {
    if (this.joinFormService.checkVixname(val)) {
      this.vixnameStatus = this.transPipe.transform('vixname-available');
      if (this.formState.value < 1) {
        this.formInit({
          age: ['', Validators.required],
          gender: ['', Validators.required],
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

  join(): void {
    console.log(this.joinForm.value);
    if (this.joinForm.value.state === -1) {
      this.login();
    } else {
      this.register();
    }
  }

  login() {
    // Temp
    if (this.joinForm.value.password === '1') {
      // tslint:disable-next-line:max-line-length
      const token = 'eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX0FETUlOIl0sInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1MjcxNjg2OTcsImV4cCI6MTUyNzE3MjI5N30.i43LN - Fu783sQ42S2 - DmLk3TMXfGyGoZOVIYE3jPJQf1_VOKUDoPboMgwciL_46OXyY8u9MOBpnbwdsfqT0WXrIaIaUqM7oH5Me03nlJd9XpSMHXHO_yb4qxbAhlgOv5rfX - n2RLPoWF3G4czpqvPpnTL4yHDSOXRcG4svmUIYFV1vEZbXTXp_crmreDakoRClZw09sikOVpWN9fhn9zxSlzYuPLBwwUcuzTXRq4FNB4SLIMmlNH4VXE_m80Kw62TNHfDd4D - FyLG6NTKpf - 0zs__zNgddl8-JMECX1 - xWNTnufMm_bJ - tY8jpaxOCR_jxtI9CYlg4U54yFeZsDli3dpBkeLBrB5VP4JoD2P_8takdPse2albsEVhiGC_FegVaHnLPYqszagQW5DQYIbJ8A8l2C3ninvUCxFmlTFcDNct96GKgScGWSRdB35l9wS6ef7bLYjS - lfAFSDPxWFHczpeE8 - UDdt5sGq6lolQGwXCFZpDZbckkmj0MjaXmowtIpxnMFwNCbsD8mPTjGHnM9sHSZhHYJnx4XklktGuq2Q7m8bU0IcpltA2Ac_v - LUb - 8TNqTUfvYc4cc8tbmK8YplHsY - PV_djlkjNmQiAqHY1nfKG2PEHpqUWfF6n9xUtiB3xGi - pAkgQkgsTfGxzSkSwe - e4ozXbjfTDv2ffhI';
      this.authService.logIn(token);
    } else {

    }
    // this.joinFormService.login(this.joinForm.value).subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }

  register() {
    this.joinFormService.register(this.joinForm.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  fbConnect() {}

  loadPassRecoverFrom() {
    this.routeService.navigateSeanceOrMain('password-recover');
  }
}
