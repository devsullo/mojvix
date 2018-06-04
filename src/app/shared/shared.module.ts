import { environment } from './../../environments/environment';
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscapeHtmlPipe } from './pipes/escape-html.pipe';
import { TransPipe } from './pipes/trans.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {
  ApolloLink,
  Observable,
  Operation,
  NextLink,
  FetchResult } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { LoggedInGuardService } from './guards/logged-in-guard.service';
import { LoggedOutGuardService } from './guards/logged-out-guard.service';
import { getOperationAST } from 'graphql';
import { TokenInterceptor } from './interceptors';

@NgModule({
  imports: [CommonModule, HttpLinkModule,
    JwtModule.forRoot({
    config: {
      tokenGetter: () => {
        return localStorage.getItem('token');
      },
      whitelistedDomains: ['localhost:3001'],
      blacklistedRoutes: ['localhost:3001/auth/']
    }
  })],
  declarations: [EscapeHtmlPipe, TransPipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EscapeHtmlPipe,
    TransPipe,
    PasswordStrengthBarModule,
    YoutubePlayerModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [AuthService, LoggedInGuardService, LoggedOutGuardService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }]
})

export class SharedModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const baseLink = httpLink.create({ uri: environment.graphqlUrl });
    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.warn(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }
      if (networkError) {
        console.log(networkError);
        networkError.error.errors.map(({ message, locations, path }) =>
          console.warn(
            `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
              locations
            )}`
          )
        );
      }
    });
    const AllLinks = ApolloLink.from([errorLink, baseLink]);

    apollo.create({
      link: baseLink,
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          errorPolicy: 'all'
        }
      }
    });
  }
}



