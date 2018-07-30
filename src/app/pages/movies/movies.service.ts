import { Injectable } from '@angular/core';
import { IMoviesResponse } from './movie';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';

@Injectable()
export class MoviesService {
  hashtagFilterSub = new BehaviorSubject<string>('');
  $hashtagFilterSub = this.hashtagFilterSub.asObservable();
  constructor(private apollo: Apollo) {}

  getMovies(): Observable<ApolloQueryResult<IMoviesResponse>> {
    const QUERY = gql`
      query getMovies(
        $orderBy: SQLOrderBy
        $take: Int
        $skip: Int
        $bOrderBy: SQLOrderBy
        $bTake: Int
      ) {
        movies(orderBy: $orderBy, take: $take, skip: $skip) {
          id
          slug
          title
          story
          poster
          properties {
            resolution
            duration
            soundQuality
            threeD
            colored
          }
          links {
            name
            url
          }
          directorNames
          actorNames
          genreNames
          tagNames
          mood
          blurbs(orderBy: $bOrderBy, take: $bTake) {
            id
            color
            content
            creator {
              email
              vixname
            }
          }
        }
      }
    `;
    return this.apollo.query({
      query: QUERY,
      variables: {
        orderBy: { column: 'id', order: 'ASC' },
        take: 15,
        skip: 0,
        bOrderBy: { column: 'totalAgree', order: 'ASC' },
        bTake: 1
      }
    });
  }

  setHashtagFilter(hashtag: string) {
    this.hashtagFilterSub.next(hashtag);
  }
}
