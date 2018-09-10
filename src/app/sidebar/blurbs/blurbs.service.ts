import { Observable ,  Subject } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { IBlurbsResponse, IBlurb } from './blurb';
import { Injectable } from '@angular/core';
import { FetchResult } from 'apollo-link';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as NavigationActions from '../header/navigation/store/navigation.actions';

const SETTINGS = window['VIX_SETTINGS'] || {};

const fragments = {
  blurbs: gql`
    fragment blurbFields on Blurb {
      id
      movieId
      color
      content
      totalAgree
      totalDisagree
      totalComments
      viewer {
        vote
      }
      creator {
        vixname
      }
    }
  `
};

export interface IBlurbSource {
  hightlight: boolean;
  observable: Observable<ApolloQueryResult<IBlurbsResponse>>;
}

@Injectable()
export class BlurbsService {

  private getBlurbsSounce = new Subject<IBlurbSource>();
  getBlurbsSounce$ = this.getBlurbsSounce.asObservable();
  blurbsQuery: QueryRef<any>;
  newBlurbSub: any;
  updateBlurbsSub: any;

  constructor(private apollo: Apollo, private store: Store<fromApp.AppState>) {}

  getBlurbs(
    where: string = '',
    hightlight: boolean = false
  ): Observable<ApolloQueryResult<IBlurbsResponse>> {
    const QUERY = gql`
      query getBlurbs(
        $orderBy: SQLOrderBy
        $where: SQLWhere
        $skip: Int
        $take: Int
      ) {
        blurbs(orderBy: $orderBy, where: $where, skip: $skip, take: $take) {
          ...blurbFields
        }
      }
      ${fragments.blurbs}
    `;
    const apolloWatchQuery: QueryRef<any> = this.apollo.watchQuery({
      query: QUERY,
      variables: {
        orderBy: { column: 'totalAgree', order: 'DESC' },
        where: { eq: [where] },
        skip: 0,
        take: SETTINGS.BLURBS_TAKE
      },
      fetchPolicy: 'network-only'
    });
    if (!hightlight) {
      this.blurbsQuery = apolloWatchQuery;
    }
    this.getBlurbsSounce.next({
      hightlight: hightlight,
      observable: apolloWatchQuery.valueChanges
    });
    return apolloWatchQuery.valueChanges;
  }

  fetchMoreBlurbs(skip: number) {
    this.blurbsQuery.fetchMore({
      variables: {
        skip: skip
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        const blurbs = Object.assign({}, prev, {
          blurbs: [...prev.blurbs, ...fetchMoreResult.blurbs]
        });
        debug.warn(fetchMoreResult.blurbs);
        return blurbs;
      }
    });
  }

  subscribeToNewBlurbs(movieId: number) {
    const SUBSCRIPTION = gql`
      subscription onblurbAdded($movieId: Int!) {
        blurbAdded(movieId: $movieId) {
          ...blurbFields
        }
      }
      ${fragments.blurbs}
    `;
    if (this.newBlurbSub) {
      this.newBlurbSub();
    }
    this.newBlurbSub = this.blurbsQuery.subscribeToMore({
      document: SUBSCRIPTION,
      variables: {
        movieId: movieId
      },
      updateQuery: (prev: IBlurbsResponse, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }
        const newBlurb: IBlurb = subscriptionData.data.blurbAdded;
        const data = {
          ...prev,
          ...{ blurbs: [...prev.blurbs, newBlurb] }
        };
        return data;
      }
    });
  }

  voteBlurb(action: string, blurbId: number): Observable<FetchResult<{}>> {
    const MUTATION = gql`
      mutation voteBlurb($action: BlurbVoteAction, $blurbId: Int!) {
        voteBlurb(action: $action, blurbId: $blurbId) {
          blurbId
        }
      }
    `;
    return this.apollo.mutate({
      mutation: MUTATION,
      variables: { blurbId, action }
    });
  }

  subscribeToUpdateBlurb(blurbIds: number[]) {
    const SUBSCRIPTION = gql`
      subscription onblurbUpdated($ids: [Int]) {
        blurbUpdated(ids: $ids) {
          ...blurbFields
        }
      }
      ${fragments.blurbs}
    `;
    if (this.updateBlurbsSub) {
      this.updateBlurbsSub();
    }
    this.updateBlurbsSub = this.blurbsQuery.subscribeToMore({
      document: SUBSCRIPTION,
      variables: {
        ids: blurbIds
      },
      updateQuery: (prev: IBlurbsResponse, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }
        const updatedBlurb: IBlurb = subscriptionData.data.blurbUpdated;
        const data = {
          ...prev,
          blurbs: prev.blurbs.map(
            blurb => (blurb.id === updatedBlurb.id ? updatedBlurb : blurb)
          )
        };
        return data;
      }
    });
  }
}
