import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {signed ? (
        <Tab.Navigator>
          <Tab.Screen name="Dashboard" component={Dashboard} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
