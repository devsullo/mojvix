export interface IBlurb {
  id?: number;
  color: string;
  content: string;
  cover?: string;
  mojvixerPic: string;
  mojvixerName: string;
  meta?: {
    agrees: number;
    disagrees: number;
    comments: number;
  };
  comments?: {
    mojvixerPic: string;
    mojvixerName: string;
    content: string;
  }[];
}
