/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Settings} from './src/view/visitor/settings';
import {Index} from './src/view/visitor';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/react-hooks';
import {BookLibrary} from './src/view/visitor/book/bookLibrary';
import {Image} from 'react-native';
const client = new ApolloClient({
  uri: 'http://10.9.2.67:8080/graphql',
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
            options={{
              headerShown: false,
              tabBarActiveTintColor: 'green',
              title: 'Camp',
              tabBarIcon: ({size}) => (
                <Image
                  style={{width: size, height: size}}
                  source={require('./src/assets/camping.png')}
                />
              ),
            }}
            component={Index}
          />

          <Tab.Screen
            name="Books"
            options={{
              headerShown: true,
              tabBarActiveTintColor: 'green',
              tabBarIcon: ({size}) => (
                <Image
                  style={{width: size, height: size}}
                  source={require('./src/assets/book.png')}
                />
              ),
            }}
            component={BookLibrary}
          />
          <Tab.Screen
            name="Exam"
            options={{
              headerShown: true,
              tabBarActiveTintColor: 'green',
              tabBarIcon: ({size}) => (
                <Image
                  style={{width: size, height: size}}
                  source={require('./src/assets/exam.png')}
                />
              ),
            }}
            component={BookLibrary}
          />
          <Tab.Screen
            name="History"
            options={{
              headerShown: true,
              tabBarActiveTintColor: 'green',
              tabBarIcon: ({size}) => (
                <Image
                  style={{width: size, height: size}}
                  source={require('./src/assets/history-book.png')}
                />
              ),
            }}
            component={BookLibrary}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              title: 'settings',
              headerShown: true,
              tabBarActiveTintColor: 'green',
              tabBarIcon: ({size}) => (
                <Image
                  style={{width: size, height: size}}
                  source={require('./src/assets/setting.png')}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
