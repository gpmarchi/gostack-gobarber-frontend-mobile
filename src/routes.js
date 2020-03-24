import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const Stack = createStackNavigator();
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

  const tabScreenOptions = ({ route }) => ({
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ color, size }) => {
      if (route.name === 'Dashboard') {
        return <Icon name="event" size={size} color={color} />;
      }
      if (route.name === 'Profile') {
        return <Icon name="person" size={size} color={color} />;
      }
      return <Icon name="person" size={size} color={color} />;
    },
  });

  return (
    <NavigationContainer>
      {signed ? (
        <Tab.Navigator
          screenOptions={tabScreenOptions}
          tabBarOptions={tabBarOptions}
        >
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ tabBarLabel: 'Agendamentos' }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{ tabBarLabel: 'Meu perfil' }}
          />
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
