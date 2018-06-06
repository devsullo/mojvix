import { NgModule } from '@angular/core';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { ApolloModule, Apollo } from 'apollo-angular';
import { environment } from '../../environments/environment';

@NgModule({
  exports: [ApolloModule, HttpLinkModule]
})

export class ApolloClientModule {
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
