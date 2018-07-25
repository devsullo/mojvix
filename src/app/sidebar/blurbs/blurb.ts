import * as fromUser from '../../pages/user/store/user.reducer';

export interface IBlurbCreateCommentResponse {
  createComment: IBlurbComment;
}

export interface IBlurbCommentResponse {
  comments: IBlurbComment[];
}

export interface IBlurbComment {
  id: number;
  content: string;
  creator: fromUser.State;
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
  creator: fromUser.State;
  totalAgree: number;
  totalDisagree: number;
  totalComments: number;
  comments?: IBlurbComment[];
}
