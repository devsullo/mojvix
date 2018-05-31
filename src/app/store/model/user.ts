export interface IUser {
  id: number;
  email?: string;
  status: string;
  vixname: string;
  info: {
    age: string;
    sex: string;
  };
  exp: number;
  iat: number;
  profilePic?: string;
}
