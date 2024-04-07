import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Settings} from './src/view/visitor/settings';
import {Index} from './src/view/visitor';
import {Login} from './src/view/visitor/authentication/Login';
import {SignUp} from './src/view/visitor/authentication/Signup';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="s" options={{headerShown: false}} component={Index} />
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
  );
};

export default App;
