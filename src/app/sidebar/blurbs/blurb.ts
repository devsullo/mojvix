import { IUser } from '../../store/model/user';

export interface IBlurbCreateCommentResponse {
  createComment: IBlurbComment;
}

export interface IBlurbCommentResponse {
  comments: IBlurbComment[];
}

export interface IBlurbComment {
  id: number;
  content: string;
  creator: IUser;
  createdAt: Date;
}

export interface IBlurbsResponse {
  blurbs: IBlurb[];
}

export interface IBlurb {
  id?: number;
  movieId: number;
  color: string;
  content: string;
  cover?: string;
  creator: IUser;
  totalAgree: number;
  totalDisagree: number;
  totalComments: number;
  comments?: IBlurbComment[];
}
