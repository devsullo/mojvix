import { IUser } from './../../store/model/user';

export interface IBlurbComment {
  user: IUser;
  content: string;
}

export interface IBlurb {
  id?: number;
  color: string;
  content: string;
  cover?: string;
  creator: IUser;
  totalAgree: number;
  totalDisagree: number;
  totalComments: number;
  comments?: IBlurbComment[];
}
