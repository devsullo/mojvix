import { Injectable } from '@angular/core';
import { ITitle } from './title';

@Injectable()
export class TitlesService {

  constructor() { }

  getTitles(): ITitle[] {
    const titles = [
      { id: 1, title: 'THE SEARCH (2014)', poster: 'assets/images/titles/poster1.jpg', genre: 'genre, genre, genre', director: 'Levan Bakhia', stars: 'Lorem, blurs, test', story: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in apiece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia', tags: '#Awesome #the search #questioning #important #Trials', blurb: { color: 'red', content: `"it's fine to selebrate
                    <span class="f-tag">#LandmineGoesClick</span> success but it is more
                    <i class="tag">#important</i> to heed lessons of
                    <i class="tag">#failure</i>"`, mojvixerPic: 'assets/images/profile/profile2.jpg', mojvixerName: 'ioo' } },
      { id: 2, title: 'THE SEARCH (2014)', poster: 'assets/images/titles/poster2.jpg', genre: 'genre, genre, genre', director: 'Levan Bakhia', stars: 'Lorem, blurs, test', story: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in apiece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia', tags: '#Awesome #the search #questioning #important #Trials', blurb: { color: 'yellow', content: `"it's fine to selebrate
                    <span class="f-tag">#LandmineGoesClick</span> success but it is more
                    <i class="tag">#important</i> to heed lessons of
                    <i class="tag">#failure</i>"`, mojvixerPic: 'assets/images/profile/profile1.jpg', mojvixerName: 'ioo' } },
      { id: 3, title: 'THE SEARCH (2014)', poster: 'assets/images/titles/poster3.jpg', genre: 'genre, genre, genre', director: 'Levan Bakhia', stars: 'Lorem, blurs, test', story: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in apiece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia', tags: '#Awesome #the search #questioning #important #Trials', blurb: { color: 'red', content: `"it's fine to selebrate
                    <span class="f-tag">#LandmineGoesClick</span> success but it is more
                    <i class="tag">#important</i> to heed lessons of
                    <i class="tag">#failure</i>"`, mojvixerPic: 'assets/images/profile/profile4.jpg', mojvixerName: 'ioo' } },
      { id: 4, title: 'THE SEARCH (2014)', poster: 'assets/images/titles/poster4.jpg', genre: 'genre, genre, genre', director: 'Levan Bakhia', stars: 'Lorem, blurs, test', story: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in apiece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia', tags: '#Awesome #the search #questioning #important #Trials', blurb: {color: 'red', content: `"it's fine to selebrate
                    <span class="f-tag">#LandmineGoesClick</span> success but it is more
                    <i class="tag">#important</i> to heed lessons of
                    <i class="tag">#failure</i>"`, mojvixerPic: 'assets/images/profile/profile1.jpg', mojvixerName: 'ioo' } },
      { id: 5, title: 'THE SEARCH (2014)', poster: 'assets/images/titles/poster5.jpg', genre: 'genre, genre, genre', director: 'Levan Bakhia', stars: 'Lorem, blurs, test', story: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in apiece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia', tags: '#Awesome #the search #questioning #important #Trials', blurb: { color: 'yellow', content: `"it's fine to selebrate
                    <span class="f-tag">#LandmineGoesClick</span> success but it is more
                    <i class="tag">#important</i> to heed lessons of
                    <i class="tag">#failure</i>"`, mojvixerPic: 'assets/images/profile/profile1.jpg', mojvixerName: 'ioo' } },
      { id: 6, title: 'THE SEARCH (2014)', poster: 'assets/images/titles/poster6.jpg', genre: 'genre, genre, genre', director: 'Levan Bakhia', stars: 'Lorem, blurs, test', story: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in apiece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia', tags: '#Awesome #the search #questioning #important #Trials', blurb: { color: 'green', content: `"it's fine to selebrate
                    <span class="f-tag">#LandmineGoesClick</span> success but it is more
                    <i class="tag">#important</i> to heed lessons of
                    <i class="tag">#failure</i>"`, mojvixerPic: 'assets/images/profile/profile1.jpg', mojvixerName: 'ioo' } },
      { id: 7, title: 'THE SEARCH (2014)', poster: 'assets/images/titles/poster7.jpg', genre: 'genre, genre, genre', director: 'Levan Bakhia', stars: 'Lorem, blurs, test', story: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in apiece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia', tags: '#Awesome #the search #questioning #important #Trials', blurb: {color: 'green', content: `"it's fine to selebrate
                    <span class="f-tag">#LandmineGoesClick</span> success but it is more
                    <i class="tag">#important</i> to heed lessons of
                    <i class="tag">#failure</i>"`, mojvixerPic: 'assets/images/profile/profile1.jpg', mojvixerName: 'ioo' } }];

    return titles;
  }

}
