import { Observable } from 'rxjs/Observable';
import { ApolloQueryResult } from 'apollo-client';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { IBlurb } from './blurb';
import { Injectable } from '@angular/core';

interface IBlurbsResponse {
  blurbs: IBlurb[];
}

@Injectable()
export class BlurbsService {
  constructor(private apollo: Apollo) {}

  getBlurbs(movieId?: number): Observable<ApolloQueryResult<IBlurbsResponse>> {
    let eq = '';
    if (movieId) {
      eq = `eq:["movieId:${movieId}"]`;
    }
    const QUERY = gql`
      query getBlurbs {
        blurbs(
          orderBy: { column: "id", order: ASC }
          where: { ${eq} }
        ) {
          id
          color
          content
          totalAgree
          totalDisagree
          totalComments
          creator {
            vixname
          }
          comments {
            content
          }
        }
      }
    `;

    return this.apollo.query({ query: QUERY });
  }
}
