import { Injectable } from '@angular/core';
import { IMovie } from './movie';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Observable';
import { ApolloQueryResult } from 'apollo-client';
interface Response {
  movies: IMovie[];
}

@Injectable()
export class MoviesService {
  constructor(private apollo: Apollo) { }

  getMovies(): Observable<ApolloQueryResult<Response>> {
    const QUERY = gql`
      query getMovies {
        movies(orderBy:{column:"id" order:ASC}) {
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
          directors { name }
          actors { name }
          genres { name }
          tags { name }
        }
      }
    `;
    return this.apollo.query({ query: QUERY });
  }
}
