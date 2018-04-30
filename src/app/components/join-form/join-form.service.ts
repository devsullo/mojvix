import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class JoinFormService {
  constructor(private http: HttpClient) {}

  checkVixname(val: string): boolean {
    // temp
    if (val === 'test') {
      return false;
    }
    return true;
  }

  login(form: any) {
    return this.http.post(environment.loginUrl, form);
  }

  register(form: any) {
    return this.http.post(environment.registerUrl, form);
  }
}
