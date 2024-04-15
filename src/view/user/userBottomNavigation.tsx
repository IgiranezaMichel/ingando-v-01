/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {BookLibrary} from './book/bookLibrary';
import {Settings} from './settings/settings';
import {Index} from '.';
import {History} from './history';
import {Exam} from './exam';
const Tab = createBottomTabNavigator();
export default function AuthenticatedUserBottomNavigation() {
  return (
    <>
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
                source={require('../../assets/camping.png')}
              />
            ),
          }}
          component={Index}
        />

        <Tab.Screen
          name="Books"
          options={{
            headerShown: false,
            title: 'Book Library',
            tabBarActiveTintColor: 'green',
            tabBarIcon: ({size}) => (
              <Image
                style={{width: size, height: size}}
                source={require('../../assets/book.png')}
              />
            ),
          }}
          component={BookLibrary}
        />
        <Tab.Screen
          name="Exam"
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'green',
            tabBarIcon: ({size}) => (
              <Image
                style={{width: size, height: size}}
                source={require('../../assets/exam.png')}
              />
            ),
          }}
          component={Exam}
        />
        <Tab.Screen
          name="History"
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'green',
            tabBarIcon: ({size}) => (
              <Image
                style={{width: size, height: size}}
                source={require('../../assets/history-book.png')}
              />
            ),
          }}
          component={History}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'settings',
            headerShown: false,
            tabBarActiveTintColor: 'green',
            tabBarIcon: ({size}) => (
              <Image
                style={{width: size, height: size}}
                source={require('../../assets/setting.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
