import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './visitor/authentication/Login';
import AuthenticatedUserBottomNavigation from './user/userBottomNavigation';
import {Index} from './Index';
import {ForgetPassword} from './visitor/authentication/forgetPassword';
import {LoginProvider} from './visitor/authentication/loginProvider';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <LoginProvider>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Home_component"
            component={Index}
          />
          <Stack.Screen
            options={{headerShown: false, animation: 'flip'}}
            name="login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false, animation: 'slide_from_bottom'}}
            name="forgetPassword"
            component={ForgetPassword}
          />
          <Stack.Screen
            options={{headerShown: false, animation: 'simple_push'}}
            name="auth_user"
            component={AuthenticatedUserBottomNavigation}
          />
        </Stack.Navigator>
      </LoginProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;
