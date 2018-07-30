import { User } from '../../pages/user/user.model';

export interface IBlurbCreateCommentResponse {
  createComment: IBlurbComment;
}

export interface IBlurbCommentResponse {
  comments: IBlurbComment[];
}

export interface IBlurbComment {
  id: number;
  content: string;
  creator: User;
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
  creator: User;
  totalAgree: number;
  totalDisagree: number;
  totalComments: number;
  comments?: IBlurbComment[];
}
