/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Image} from 'react-native';
import {Index} from './src/view/user';
import {BookLibrary} from './src/view/user/book/bookLibrary';
import {Settings} from './src/view/user/settings/settings';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
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
            title: 'Book Library',
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
  );
};

export default App;
