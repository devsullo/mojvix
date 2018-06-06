import { IUser } from './../../store/model/user';

export interface IBlurbCreateCommentResponse {
  createComment: IBlurbComment;
}

export interface IBlurbComment {
  // user: IUser;
  id: number;
  content: string;
}

export interface IBlurbsResponse {
  blurbs: IBlurb[];
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
