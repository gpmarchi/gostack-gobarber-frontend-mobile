import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import NewAppointment from '~/pages/NewAppointment';

const LoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarOptions = {
  keyboardHidesTabBar: true,
  activeTintColor: '#fff',
  inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
  style: {
    backgroundColor: '#8d41a8',
    borderTopWidth: 0,
  },
};

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {signed ? (
        <Tab.Navigator tabBarOptions={tabBarOptions}>
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={Dashboard.navigationOptions}
          />
          <Tab.Screen
            name="New"
            component={NewAppointment}
            options={NewAppointment.navigationOptions}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={Profile.navigationOptions}
          />
        </Tab.Navigator>
      ) : (
        <LoginStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <LoginStack.Screen name="SignIn" component={SignIn} />
          <LoginStack.Screen name="SignUp" component={SignUp} />
        </LoginStack.Navigator>
      )}
    </NavigationContainer>
  );
}
