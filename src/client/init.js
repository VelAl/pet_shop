import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import {
  ApolloClient,
  InMemoryCache,
  split,
  HttpLink
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('petStoreToken');
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const httpLink = new HttpLink({
  uri: 'https://funded-pet-library.moonhighway.com/',
});

const wsLink = new WebSocketLink({
  uri: 'wss://funded-pet-library.moonhighway.com/graphql',
  options: {
    reconnect: true,
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache({
    typePolicies: {
      Customer: {
        merge(existing, incoming) {
          return { ...existing, ...incoming };
        }
      },

      'Cat': {
        fields: {
          photo:{
            merge(existing, incoming) {
              return { ...existing, ...incoming };
            }
          }
        }
      },
      Dog: {
        fields: {
          photo:{
            merge(existing, incoming) {
              return { ...existing, ...incoming };
            }
          }
        }
      },
      Stingray: {
        fields: {
          photo:{
            merge(existing, incoming) {
              return { ...existing, ...incoming };
            }
          }
        }
      },
      Rabbit: {
        fields: {
          photo:{
            merge(existing, incoming) {
              return { ...existing, ...incoming };
            }
          }
        }
      },
    }
  }),
})

