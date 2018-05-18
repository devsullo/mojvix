import { Injectable } from '@angular/core';
import { ITitle } from './title';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Observable';
import { ApolloQueryResult } from 'apollo-client';
interface Response {
  movies: ITitle[];
}

@Injectable()
export class TitlesService {
  constructor(private apollo: Apollo) { }

  getTitles(): Observable<ApolloQueryResult<Response>> {
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
          links { name }
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
