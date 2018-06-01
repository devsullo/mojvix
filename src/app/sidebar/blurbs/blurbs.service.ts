import { Observable } from 'rxjs/Observable';
import { ApolloQueryResult } from 'apollo-client';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { IBlurb } from './blurb';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


interface IBlurbsResponse {
  blurbs: IBlurb[];
}

@Injectable()
export class BlurbsService {
  private getBlurbsSounce = new Subject<
    Observable<ApolloQueryResult<IBlurbsResponse>>
  >();
  getBlurbsSounce$ = this.getBlurbsSounce.asObservable();
  constructor(private apollo: Apollo) {}

  getBlurbs(movieId?: number): void {
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
    this.getBlurbsSounce.next(this.apollo.query({ query: QUERY }));
  }
}
