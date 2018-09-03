import { IBlurb } from '../../sidebar/blurbs/blurb';
export interface IMoviesResponse {
  movies: IMovie[];
}
export interface IMovie {
  id?: number;
  slug: string;
  title: string;
  story: string;
  color: string;
  totalGreen: number;
  copyright: string;
  poster: string;
  videoSrc: string;
  genreNames: string[];
  hashtags: string[];
  directorNames: string[];
  actorNames: string[];
  tagNames: string[];
  properties: {
    resolution: string;
    duration: number;
    soundQuality: string;
    threeD: boolean;
    colored: boolean;
  };
  links: {
    name: string;
    url: string;
  }[];
  moods: any[];
  blurbs: IBlurb[];
}
