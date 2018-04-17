import { Injectable } from '@angular/core';
import { ITitle } from './title';

@Injectable()
export class TitlesService {

  constructor() { }

  getTitles(): ITitle[] {
    const titles = [
      {
        id: 1,
        title: 'LAND MINE GOES CLICK',
        poster: 'assets/images/titles/poster1.jpg',
        genre: 'genre, genre, genre',
        hashtags: ['#test', '#thisIsMovie', '#poster'],
        director: 'Levan Bakhia',
        stars: 'Lorem, blurs, test',
        // tslint:disable-next-line:max-line-length
        story: 'Trapped standing on an armed landmine, an American tourist is forced to watch helplessly while his girlfriend is terrorized and brutally assaulted.',
        tags: '#Awesome #the search #questioning #important #Trials',
        propResolution: '2/5',
        propRuntime: 12,
        propSoundQuality: 'test',
        propThreeD: true,
        propColored: true,
        socials: [
          {name: 'facebook', url: '#'},
          {name: 'rotten', url: '#'}
        ],
        moods: ['scary', 'cool', 'excite'],
        blurb: {
          color: 'red',
          content: `"it's fine to selebrate
                    <span class="f-tag">#LandmineGoesClick</span> success but it is more
                    <i class="tag">#important</i> to heed lessons of
                    <i class="tag">#failure</i>"`,
          mojvixerPic: 'assets/images/profile/profile2.jpg',
          mojvixerName: 'ioo'
        }
      },
      {
        id: 2,
        title: '247F',
        poster: 'assets/images/titles/poster2.jpg',
        genre: 'genre, genre, genre',
        hashtags: ['#test', '#thisIsMovie', '#poster'],
        director: 'Levan Bakhia',
        stars: 'Lorem, blurs, test',
        // tslint:disable-next-line:max-line-length
        story: 'Four friends travel to a lakeside cabin for a carefree weekend, the fun turns into a nightmare when 3 of them end up locked in a hot sauna. Every minute counts and every degree matters as they fight for their lives in the heat up to 247°F.',
        tags: '#Awesome #the search #questioning #important #Trials',
        propResolution: '2/5',
        propRuntime: 12,
        propSoundQuality: 'test',
        propThreeD: true,
        propColored: true,
        socials: [
          {name: 'facebook', url: '#'},
          {name: 'rotten', url: '#'}
        ],
        moods: ['scary', 'cool', 'excite'],
        blurb: {
          color: 'red',
          content: `"it's fine to selebrate
                    <span class="f-tag">#LandmineGoesClick</span> success but it is more
                    <i class="tag">#important</i> to heed lessons of
                    <i class="tag">#failure</i>"`,
          mojvixerPic: 'assets/images/profile/profile2.jpg',
          mojvixerName: 'ioo'
        }
      },
      {
        id: 3,
        title: 'THE SEARCH (2014)',
        poster: 'assets/images/titles/poster3.jpg',
        genre: 'genre, genre, genre',
        hashtags: ['#test', '#thisIsMovie', '#poster'],
        director: 'Levan Bakhia',
        stars: 'Lorem, blurs, test',
        // tslint:disable-next-line:max-line-length
        story: 'A woman who works for a non-governmental organization (NGO) forms a special relationship with a young boy in war-torn Chechnya.',
        tags: '#Awesome #the search #questioning #important #Trials',
        propResolution: '2/5',
        propRuntime: 12,
        propSoundQuality: 'test',
        propThreeD: true,
        propColored: true,
        socials: [
          {name: 'facebook', url: '#'},
          {name: 'rotten', url: '#'}
        ],
        moods: ['scary', 'cool', 'excite'],
        blurb: {
          color: 'red',
          content: `"it's fine to selebrate
                    <span class="f-tag">#LandmineGoesClick</span> success but it is more
                    <i class="tag">#important</i> to heed lessons of
                    <i class="tag">#failure</i>"`,
          mojvixerPic: 'assets/images/profile/profile2.jpg',
          mojvixerName: 'ioo'
        }
      },
      {
        id: 4,
        title: 'LAND MINE GOES CLICK',
        poster: 'assets/images/titles/poster4.jpg',
        genre: 'genre, genre, genre',
        hashtags: ['#test', '#thisIsMovie', '#poster'],
        director: 'Levan Bakhia',
        stars: 'Lorem, blurs, test',
        // tslint:disable-next-line:max-line-length
        story: 'Trapped standing on an armed landmine, an American tourist is forced to watch helplessly while his girlfriend is terrorized and brutally assaulted.',
        tags: '#Awesome #the search #questioning #important #Trials',
        propResolution: '2/5',
        propRuntime: 12,
        propSoundQuality: 'test',
        propThreeD: true,
        propColored: true,
        socials: [
          {name: 'facebook', url: '#'},
          {name: 'rotten', url: '#'}
        ],
        moods: ['scary', 'cool', 'excite'],
        blurb: {
          color: 'red',
          content: `"it's fine to selebrate
                    <span class="f-tag">#LandmineGoesClick</span> success but it is more
                    <i class="tag">#important</i> to heed lessons of
                    <i class="tag">#failure</i>"`,
          mojvixerPic: 'assets/images/profile/profile2.jpg',
          mojvixerName: 'ioo'
        }
      },
      {
        id: 5,
        title: '247F',
        poster: 'assets/images/titles/poster5.jpg',
        genre: 'genre, genre, genre',
        hashtags: ['#test', '#thisIsMovie', '#poster'],
        director: 'Levan Bakhia',
        stars: 'Lorem, blurs, test',
        // tslint:disable-next-line:max-line-length
        story: 'Four friends travel to a lakeside cabin for a carefree weekend, the fun turns into a nightmare when 3 of them end up locked in a hot sauna. Every minute counts and every degree matters as they fight for their lives in the heat up to 247°F.',
        tags: '#Awesome #the search #questioning #important #Trials',
        propResolution: '2/5',
        propRuntime: 12,
        propSoundQuality: 'test',
        propThreeD: true,
        propColored: true,
        socials: [
          {name: 'facebook', url: '#'},
          {name: 'rotten', url: '#'}
        ],
        moods: ['scary', 'cool', 'excite'],
        blurb: {
          color: 'red',
          content: `"it's fine to selebrate
                    <span class="f-tag">#LandmineGoesClick</span> success but it is more
                    <i class="tag">#important</i> to heed lessons of
                    <i class="tag">#failure</i>"`,
          mojvixerPic: 'assets/images/profile/profile2.jpg',
          mojvixerName: 'ioo'
        }
      },
      {
        id: 6,
        title: 'THE SEARCH (2014)',
        poster: 'assets/images/titles/poster6.jpg',
        genre: 'genre, genre, genre',
        hashtags: ['#test', '#thisIsMovie', '#poster'],
        director: 'Levan Bakhia',
        stars: 'Lorem, blurs, test',
        // tslint:disable-next-line:max-line-length
        story: 'A woman who works for a non-governmental organization (NGO) forms a special relationship with a young boy in war-torn Chechnya.',
        tags: '#Awesome #the search #questioning #important #Trials',
        propResolution: '2/5',
        propRuntime: 12,
        propSoundQuality: 'test',
        propThreeD: true,
        propColored: true,
        socials: [
          {name: 'facebook', url: '#'},
          {name: 'rotten', url: '#'}
        ],
        moods: ['scary', 'cool', 'excite'],
        blurb: {
          color: 'red',
          content: `"it's fine to selebrate
                    <span class="f-tag">#LandmineGoesClick</span> success but it is more
                    <i class="tag">#important</i> to heed lessons of
                    <i class="tag">#failure</i>"`,
          mojvixerPic: 'assets/images/profile/profile2.jpg',
          mojvixerName: 'ioo'
        }
      },
      {
        id: 7,
        title: 'THE SEARCH (2014)',
        poster: 'assets/images/titles/poster7.jpg',
        genre: 'genre, genre, genre',
        hashtags: ['#test', '#thisIsMovie', '#poster'],
        director: 'Levan Bakhia',
        stars: 'Lorem, blurs, test',
        // tslint:disable-next-line:max-line-length
        story: 'A woman who works for a non-governmental organization (NGO) forms a special relationship with a young boy in war-torn Chechnya.',
        tags: '#Awesome #the search #questioning #important #Trials',
        propResolution: '2/5',
        propRuntime: 12,
        propSoundQuality: 'test',
        propThreeD: true,
        propColored: true,
        socials: [
          {name: 'facebook', url: '#'},
          {name: 'rotten', url: '#'}
        ],
        moods: ['scary', 'cool', 'excite'],
        blurb: {
          color: 'red',
          content: `"it's fine to selebrate
                    <span class="f-tag">#LandmineGoesClick</span> success but it is more
                    <i class="tag">#important</i> to heed lessons of
                    <i class="tag">#failure</i>"`,
          mojvixerPic: 'assets/images/profile/profile2.jpg',
          mojvixerName: 'ioo'
        }
      }
    ];

    return titles;
  }

}
