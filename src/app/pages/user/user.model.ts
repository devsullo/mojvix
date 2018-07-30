export class User {
  constructor(
    public id: number,
    public status: string,
    public vixname: string,
    public info: {
      age: string;
      sex: string;
    },
    public exp: number,
    public iat: number,
    public email?: string,
    public avatar?: string
  ) {}
}
