import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Apollo } from '../../../../node_modules/apollo-angular';
import { FetchResult } from 'apollo-link';
import { User } from './user.model';
import gql from 'graphql-tag';

export interface IUserInfoUpdateResponse {
  updateUserInfo: User;
}

export interface IUserEmailUpdateResponse {
  updateUserEmail: { email: string };
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get user(): User {
    return JSON.parse(localStorage.getItem('user')) || null;
  }

  constructor(private apollo: Apollo) {}

  updateUserInfo(user: User): Observable<FetchResult<IUserInfoUpdateResponse>> {
    const MUTATION = gql`
      mutation updateUserInfo($input: UpdateUserInfoInput!) {
        updateUserInfo(input: $input) {
          info {
            firstName
            lastName
            age
            sex
          }
        }
      }
    `;
    return this.apollo.mutate({
      mutation: MUTATION,
      variables: { input: user.info }
    });
  }

  updateUserEmail(formValue: {
    email: string;
    password: string;
  }): Observable<FetchResult<IUserEmailUpdateResponse>> {
    const MUTATION = gql`
      mutation updateUserEmail($input: UpdateUserEmailInput!) {
        updateUserEmail(input: $input) {
          email
        }
      }
    `;
    return this.apollo.mutate({
      mutation: MUTATION,
      variables: { input: formValue }
    });
  }
}
