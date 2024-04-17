/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {BookLibrary} from './book/bookLibrary';
import {Settings} from './settings/settings';
import {Index} from '.';
import {History} from './history';
import {Exam} from './exam';
import {LogoutContext, LogoutModalProps} from '../../context/logoutContext';
import {Logout} from './logout';
import {ResponseData} from '../../types/responseData';
import {useFindByEmail} from '../../controller/accountHolder/mutation';
import {AccountHolderContext} from '../../context/accountHolderContext';
const Tab = createBottomTabNavigator();
export default function AuthenticatedUserBottomNavigation() {
  const [showModal, setShowModal] = React.useState(false);
  const data: LogoutModalProps = {
    setShowLogoutModal: (modal: boolean) => setShowModal(modal),
    showLogoutModal: showModal,
  };
  // const {accountHolderDetail, setAccountHolderDetail} = React.useState();
  const [email] = React.useState('michel.igiraneza@auca.ac.rw');
  const {findEmailHandler, response} = useFindByEmail(email);

  const responseData: ResponseData = {
    responseContent: response.responseContent,
    responseReady: response.responseReady,
    refresh: () => findEmailHandler(),
  };
  React.useEffect(() => {
    const fetch = async () => {
      findEmailHandler();
    };
    fetch();
  }, [email]);
  console.log(response);
  return (
    <AccountHolderContext.Provider value={responseData}>
      <LogoutContext.Provider value={data}>
        <Tab.Navigator>
          <Tab.Screen
            name="userHomeScreen"
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
        <Logout />
      </LogoutContext.Provider>
    </AccountHolderContext.Provider>
  );
}
