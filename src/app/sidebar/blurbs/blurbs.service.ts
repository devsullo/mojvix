import { Observable } from 'rxjs/Observable';
import { ApolloQueryResult } from 'apollo-client';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { IBlurbCreateCommentResponse, IBlurbsResponse } from './blurb';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FetchResult } from 'apollo-link';


@Injectable()
export class BlurbsService {
  private getBlurbsSounce = new Subject<
    Observable<ApolloQueryResult<IBlurbsResponse>>
  >();
  getBlurbsSounce$ = this.getBlurbsSounce.asObservable();
  constructor(private apollo: Apollo) {}

  getBlurbs(movieId?: number): void {
    let where = `movieId:${movieId}`;
    if (!movieId) {
      where = '';
    }
    const QUERY = gql`
      query getBlurbs($orderBy: SQLOrderBy, $where: SQLWhere) {
        blurbs(orderBy: $orderBy, where: $where) {
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
            id
            content
          }
        }
      }
    `;
    this.getBlurbsSounce.next(this.apollo.query({
        query: QUERY,
        variables: {
          orderBy: { column: 'id', order: 'ASC' },
          where: { eq: [where] }
        }
      }));
  }

  createBlurbComment(blurbId: number, content: string): Observable<FetchResult<IBlurbCreateCommentResponse>> {
    const MUTATION = gql`
      mutation createComment($blurbId: Int!, $input: CreateCommentInput!) {
        createComment(blurbId: $blurbId, input: $input) {
          id
          content
        }
      }
    `;
    return this.apollo.mutate({
      mutation: MUTATION,
      variables: {
        blurbId: blurbId,
        input: {
          content: content
        }
      }
    });
  }
}
