import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


@Injectable()
export class JoinFormService {

  constructor(
    // http: HttpClient
  ) { }

  checkVixname(val: string): boolean {
    // temp
    if (val === 'test') {
      return false;
    }
    return true;
  }

  join() {}
}
