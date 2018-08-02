import { IBlurb } from './../../sidebar/blurbs/blurb';

export class Info {
  constructor(
    public firstName: String,
    public lastName: String,
    public age: string,
    public sex: string,
  ) {}
}

export class Vixnames {
  constructor(
    public value: String,
    public primary: Number
  ) {}
}

export class User {
  constructor(
    public id: number,
    public status: string,
    public info: Info,
    public vixname: string,
    public vixnames: Vixnames[],
    public blurbs: IBlurb,
    public exp: number,
    public iat: number,
    public email?: string,
    public avatar?: string
  ) {}
}
