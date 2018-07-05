import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IBlurbCreateCommentResponse, IBlurbCommentResponse } from '../blurb';
import { FetchResult } from 'apollo-link';
import gql from 'graphql-tag';
import { Apollo, QueryRef } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
const SETTINGS = window['VIX_SETTINGS'] || {};

@Injectable()
export class CommentsService {
  commentsQuery = [];
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
          creator {
            vixname
          }
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

  getComments(
    blurbId: number
  ): Observable<ApolloQueryResult<IBlurbCommentResponse>> {
    const QUERY = gql`
      query getComments($skip: Int, $take: Int, $findBy: FindByComment, $orderBy: SQLOrderBy) {
        comments(skip: $skip, take: $take, findBy: $findBy, orderBy: $orderBy) {
          id
          content
          creator {
            vixname
          }
        }
      }
    `;
    this.commentsQuery[blurbId] = this.apollo.watchQuery({
      query: QUERY,
      variables: {
        findBy: { blurbId: blurbId },
        orderBy: { column: 'id', order: 'DESC' },
        skip: 0,
        take: SETTINGS.blurbCommentsTake
      }
      // fetchPolicy: 'network-only'
    });
    return this.commentsQuery[blurbId].valueChanges;
  }

  fetchMoreComments(skip: number, blurbId: number) {
    this.commentsQuery[blurbId].fetchMore({
      variables: {
        skip: skip
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return Object.assign({}, prev, {
          comments: [...fetchMoreResult.comments, ...prev.comments]
        });
      }
    });
  }
}
