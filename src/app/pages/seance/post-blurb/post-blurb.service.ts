import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    input: any,
    movieId: number
  ): Observable<FetchResult<ICreateBlurbResponse>> {
    const MUTATION = gql`
      mutation createBlurb($movieId: Int!, $input: CreateBlurbInput!) {
        createBlurb(movieId: $movieId, input: $input) {
          id
        }
      }
    `;
    return this.apollo.mutate({
      mutation: MUTATION,
      variables: {
        input: input,
        movieId: movieId
      }
    });
  }
}
