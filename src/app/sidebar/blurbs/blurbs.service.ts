import { IBlurb } from './blurb';
import { Injectable } from '@angular/core';

@Injectable()
export class BlurbsService {

  constructor() { }

  getBlurbs(): IBlurb[] {
    const blurbs = [
     { id: 1, color: 'red', content: "it's fine to selebrate #LandmineGoesClick success but it is more #important to heed lessons of #failure", cover: 'assets/images/movies/cover-blurb.jpg', mojvixerPic: 'assets/images/profile/profile2.jpg', mojvixerName: 'Lasha', meta: { agrees: 12, disagrees: 45, comments: 56 }, comments: [{ mojvixerPic: 'assets/images/profile/profile1.jpg', mojvixerName: 'iosa', content: 'Okay bro' }] },
     { id: 2, color: 'yellow', content: "poll (number): How often to check for file updates.", cover: '', mojvixerPic: 'assets/images/profile/profile1.jpg', mojvixerName: 'Lasha', meta: { agrees: 12, disagrees: 45, comments: 56 }, comments: [] },
     { id: 3, color: 'green', content: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.", cover: '', mojvixerPic: 'assets/images/profile/profile4.jpg', mojvixerName: 'Lasha', meta: { agrees: 12, disagrees: 45, comments: 56 }, comments: [{ mojvixerPic: 'assets/images/profile/profile4.jpg', mojvixerName: 'iosa', content: 'Various versions have evolved over the years' }] }
    ];

    return blurbs;
  }

}
