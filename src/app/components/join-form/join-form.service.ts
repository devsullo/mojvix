import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Observable';
import { ApolloQueryResult } from 'apollo-client';

interface ICheckVixnameResult {
  checkVixname: {
    vixname: string;
    available: boolean;
  };
}

@Injectable()
export class JoinFormService {
  constructor(private http: HttpClient, private apollo: Apollo) {}

  checkVixname(
    vixname: string
  ): Observable<ApolloQueryResult<ICheckVixnameResult>> {
    const QUERY = gql`
      query checkVixname {
        checkVixname(vixname: "${ vixname }") {
          vixname
          available
        }
      }
    `;
    return this.apollo.query({ query: QUERY });
  }

  login(form: any) {
    return this.http.post(environment.loginUrl, form);
  }

  register(form: any) {
    return this.http.post(environment.registerUrl, form);
  }
}
