import { IBlurb } from '../../sidebar/blurbs/blurb'
export interface ITitle {
  id: number;
  title: string;
  genre: string;
  director: string;
  stars: string;
  story: string;
  tags: string;
  blurb: IBlurb;
}