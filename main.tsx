import * as React from 'react';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/react-hooks';
import App from './App';
const client = new ApolloClient({
  uri: 'http://10.9.2.67:8080/graphql',
  cache: new InMemoryCache(),
});
export const Main = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
