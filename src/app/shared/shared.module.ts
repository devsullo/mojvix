import { environment } from './../../environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscapeHtmlPipe } from './pipes/escape-html.pipe';
import { TransPipe } from './pipes/trans.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  imports: [CommonModule, HttpLinkModule,
    JwtModule.forRoot({
    config: {
      // tokenGetter: tokenGetter,
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
  providers: [AuthService]
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
        networkError.error.errors.map(({ message, locations, path }) =>
          console.warn(
            `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
              locations
            )}`
          )
        );
      }
    });

    // const middleware = new ApolloLink((operation, forward) => {
    //   operation.setContext({
    //     headers: new HttpHeaders().set(
    //       'Authorization',
    //       localStorage.getItem('token') || null,
    //     ),
    //   });
    //   return forward(operation);
    // });

    const AllLinks = ApolloLink.from([errorLink, baseLink]);

    apollo.create({
      link: AllLinks,
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          errorPolicy: 'all'
        }
      }
    });
  }
}
