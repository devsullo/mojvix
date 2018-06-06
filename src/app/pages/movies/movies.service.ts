import { Injectable } from '@angular/core';
import { IMoviesResponse } from './movie';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Observable';
import { ApolloQueryResult } from 'apollo-client';

@Injectable()
export class MoviesService {
  constructor(private apollo: Apollo) {
  }

  getMovies(): Observable<ApolloQueryResult<IMoviesResponse>> {
    const QUERY = gql`
      query getMovies($orderBy: SQLOrderBy) {
        movies(orderBy: $orderBy) {
          id
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
          links { name, url }
          directorNames
          actorNames
          genreNames
          tagNames
        }
      }
    `;
    return this.apollo.query({
      query: QUERY,
      variables: {
        orderBy: { column: 'id', order: 'ASC' },
      }
    });
  }
}
