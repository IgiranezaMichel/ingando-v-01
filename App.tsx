import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Settings} from './src/view/visitor/settings';
import {Index} from './src/view/visitor';
import {Login} from './src/view/visitor/authentication/Login';
import {SignUp} from './src/view/visitor/authentication/Signup';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/react-hooks';
const client = new ApolloClient({
  uri: 'http://192.168.43.39:8080/graphql',
  cache: new InMemoryCache(),
});
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="s"
            options={{headerShown: false}}
            component={Index}
          />
          <Tab.Screen
            name="login"
            options={{headerShown: false}}
            component={Login}
          />
          <Tab.Screen
            name="signup"
            options={{headerShown: false}}
            component={SignUp}
          />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
