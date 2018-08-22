import { RouteService } from './services/route.service';
import { NgModule } from '@angular/core';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, split } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { ApolloModule, Apollo } from 'apollo-angular';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
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
    private authService: AuthService,
    private routeService: RouteService
  ) {
    this.setupLink();
  }

  private setupLink() {
    const baseLink = this.httpLink.create({ uri: environment.graphqlUrl });
    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
          debug.warn(`[GraphQL error]: Message: ${message}, Path: ${path}, Location: ${JSON.stringify(locations)}`);
          // Temp
          if (message === 'Forbidden') {
            this.routeService.navigateSeanceOrMain('join');
          }
        });
      }
      if (networkError) {
        if (networkError.error) {
          networkError.error.errors.map(({ message, locations, path }) => {
            debug.warn(`[GraphQL error]: Message: ${message}, Path: ${path}, Location: ${JSON.stringify(locations)}`);
          });
        } else {
          debug.warn(`[GraphQL networkError]: name: ${networkError.name}, message: ${networkError.message}`);
        }
      }
    });
    const wsClient = this.connectWSLink();
    const wsLink = new WebSocketLink(wsClient);

    wsClient.onConnected(() => {
      debug.log('Ws connected');
    });

    wsClient.onDisconnected(() => {
      debug.warn('Ws disconnected');
    });

    this.authService.reconnectWsLink$.subscribe(() => {
      wsClient.close();
    });

    const link = split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      wsLink,
      baseLink
    );

    const AllLinks = ApolloLink.from([errorLink, link]);
    this.apollo.create({
      link: AllLinks,
      cache: new InMemoryCache({
        dataIdFromObject: (o: any) => {
          if (o.__typename != null && o.id != null) {
            return `${o.__typename}-${o.id}`;
          }
        }
      }),
      defaultOptions: {
        watchQuery: {
          errorPolicy: 'all'
        }
      }
    });
  }

  private connectWSLink() {
    return new SubscriptionClient(environment.wsUrl, {
      reconnect: true,
      connectionParams: () => {
        return { authToken: this.authService.token };
      }
    });
  }

}

