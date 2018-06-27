import { NgModule } from '@angular/core';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, split } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { ApolloModule, Apollo } from 'apollo-angular';
import { WebSocketLink } from 'apollo-link-ws';
import { environment } from '../../environments/environment';
import { getMainDefinition } from 'apollo-utilities';
import { AuthService } from './services/auth.service';

@NgModule({
  exports: [ApolloModule, HttpLinkModule]
})

export class ApolloClientModule {
  constructor(
    private apollo: Apollo,
    private httpLink: HttpLink,
    private authService: AuthService
  ) {
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
    const wsLink = new WebSocketLink({
      uri: environment.wsUrl,
      options: {
        reconnect: true
      },
      connectionParams: {
        authToken: this.authService.isAuthenticated
      },
    });

    const link = split(// split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      }, wsLink, baseLink);

    const AllLinks = ApolloLink.from([errorLink, link]);
    apollo.create({
      link: AllLinks,
      cache: new InMemoryCache({
        dataIdFromObject: (o: any) => {
          if (o.__typename != null && o.id != null) {
            return `${o.__typename}-${o.id}`;
          }
        },
      }),
      defaultOptions: {
        watchQuery: {
          errorPolicy: 'all'
        }
      }
    });
  }
}
