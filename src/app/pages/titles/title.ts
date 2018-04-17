import { IBlurb } from '../../sidebar/blurbs/blurb';
export interface ITitle {
  id?: number;
  title: string;
  poster: string;
  genre: string;
  hashtags: string[];
  director: string;
  stars: string;
  story: string;
  tags: string;
  propResolution: string;
  propRuntime: number;
  propSoundQuality: string;
  propThreeD: boolean;
  propColored: boolean;
  socials: {
    name: string;
    url: string;
  }[];
  moods: string[];
  blurb: IBlurb;
}
