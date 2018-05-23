import { IBlurb } from '../../sidebar/blurbs/blurb';
export interface IMoviesResponse {
  movies: IMovie[];
}
export interface IMovie {
  id?: number;
  title: string;
  story: string;
  poster: string;
  videoSrc: string;
  genreNames: string[];
  hashtags: string[];
  directorNames: string[];
  actorNames: string[];
  tagNames: string[];
  properties: {
    resolution: string;
    runtime: number;
    soundQuality: string;
    threeD: boolean;
    colored: boolean;
  };
  links: {
    name: string;
    url: string;
  }[];
  moods: string[];
  blurb: IBlurb;
}
