import * as React from 'react';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/react-hooks';
import AppNavigator from './src/view/navigationContainer';
const client = new ApolloClient({
  uri: 'http://10.9.3.63:8080/graphql',
  cache: new InMemoryCache(),
});
export const Main = () => {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
};
