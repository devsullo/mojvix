import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IBlurbCreateCommentResponse,
  IBlurbComment,
  IBlurbCommentResponse
} from '../blurb';
import { FetchResult } from 'apollo-link';
import gql from 'graphql-tag';
import { Apollo, QueryRef } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
const SETTINGS = window['VIX_SETTINGS'] || {};
const fragments = {
  comment: gql`
    fragment commentFields on Comment {
      id
      content
      createdAt
      creator {
        vixname
      }
    }
  `
};

@Injectable()
export class CommentsService {
  commentQuerys = [];
  commentSubscriptions = [];
  commentTypeStore = {};
  constructor(private apollo: Apollo) {}

  createComment(
    blurbId: number,
    content: string
  ): Observable<FetchResult<IBlurbCreateCommentResponse>> {
    const MUTATION = gql`
      mutation createComment($blurbId: Int!, $input: CreateCommentInput!) {
        createComment(blurbId: $blurbId, input: $input) {
          id
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
          ...commentFields
        }
      }
      ${fragments.comment}
    `;
    this.commentQuerys[blurbId] = this.apollo.watchQuery({
      query: QUERY,
      variables: {
        findBy: { blurbId: blurbId },
        orderBy: { column: 'id', order: 'DESC' },
        skip: 0,
        take: SETTINGS.BLURB_COMMENTS_TAKE
      }
      // fetchPolicy: 'network-only'
    });
    this.subscribeToNewComments(blurbId);
    return this.commentQuerys[blurbId].valueChanges;
  }

  fetchMoreComments(skip: number, blurbId: number) {
    this.commentQuerys[blurbId].fetchMore({
      variables: {
        skip: skip
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        const data = { ...prev, ...{ comments: [...prev.comments, ...fetchMoreResult.comments] } };
        debug.log(data);
        return data;
      }
    });
  }

  subscribeToNewComments(blurbId: number) {
    const SUBSCRIPTION = gql`
      subscription onCommentAdded($blurbId: Int!) {
        commentAdded(blurbId: $blurbId) {
          ...commentFields
        }
      }
      ${fragments.comment}
    `;
    if (this.commentSubscriptions[blurbId]) {
      this.commentSubscriptions[blurbId]();
    }
    this.commentSubscriptions[blurbId] = this.commentQuerys[blurbId].subscribeToMore(
      {
        document: SUBSCRIPTION,
        variables: {
          blurbId: blurbId
        },
        updateQuery: (prev: IBlurbCommentResponse, { subscriptionData }) => {
          if (!subscriptionData.data) {
            return prev;
          }
          const newComment: IBlurbComment = subscriptionData.data.commentAdded;
          const data = { ...prev, ...{ comments: [newComment, ...prev.comments] } };
          debug.log(data);
          return data;
        }
      }
    );
  }

}
