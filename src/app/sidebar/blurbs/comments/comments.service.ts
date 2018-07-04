import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IBlurbCreateCommentResponse, IBlurbComment } from '../blurb';
import { FetchResult } from 'apollo-link';
import gql from 'graphql-tag';
import { Apollo, QueryRef } from 'apollo-angular';
const SETTINGS = window['VIX_SETTINGS'] || {};

@Injectable()
export class CommentsService {
  commentsQuery: QueryRef<any>;
  constructor(private apollo: Apollo) {}

  createComment(
    blurbId: number,
    content: string
  ): Observable<FetchResult<IBlurbCreateCommentResponse>> {
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

  fetchMoreComments(
    skip: number,
    blurbId: number
  ): Observable<FetchResult<IBlurbComment>> {
    const QUERY = gql`
      query getComments($skip: Int, $take: Int) {
        comments(skip: $skip, take: $take) {
          id
          content
        }
      }
    `;
    return this.apollo.watchQuery({
      query: QUERY,
      variables: {
        findBy: { blurbId: blurbId },
        skip: skip,
        take: SETTINGS.blurbCommentsTake
      },
      fetchPolicy: 'network-only'
    }).valueChanges;

    // this.commentsQuery.valueChanges.subscribe(res => {
    //   console.log(res);

    // });

    // this.commentsQuery.fetchMore({
    //   variables: {
    //     skip: skip
    //   },
    //   updateQuery: (prev, { fetchMoreResult }) => {
    //     if (!fetchMoreResult) {
    //       return prev;
    //     }
    //     return Object.assign({}, prev, {
    //       comments: [...prev.comments, ...fetchMoreResult.comments]
    //     });
    //   }
    // });
  }
}
