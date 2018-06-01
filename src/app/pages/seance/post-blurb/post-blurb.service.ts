import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FetchResult } from 'apollo-link';

interface ICreateBlurbResponse {
  createBlurb: {
    id: number
  };
}

@Injectable()
export class PostBlurbService {
  constructor(private apollo: Apollo) {}

  createBlurb(
    formValue: any,
    movieId: number
  ): Observable<FetchResult<ICreateBlurbResponse>> {
    const MUTATION = gql`
      mutation createBlurb {
        createBlurb(movieId: ${movieId}, input: "${formValue}") {
          id
        }
      }
    `;
    return this.apollo.mutate({ mutation: MUTATION });
  }
}
