import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Confirm from '~/pages/Confirm';
import SelectDateTime from '~/pages/SelectDateTime';
import SelectProvider from '~/pages/SelectProvider';

const AppointmentStack = createStackNavigator();

const navigatorScreenOptions = {
  headerTransparent: true,
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  headerLeftContainerStyle: {
    marginLeft: 20,
  },
};

export default function NewAppointmentStackScreen() {
  return (
    <AppointmentStack.Navigator screenOptions={navigatorScreenOptions}>
      <AppointmentStack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={SelectProvider.navigationOptions}
      />
      <AppointmentStack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={SelectDateTime.navigationOptions}
      />
      <AppointmentStack.Screen name="Confirm" component={Confirm} />
    </AppointmentStack.Navigator>
  );
}

NewAppointmentStackScreen.navigationOptions = {
  tabBarVisible: false,
  tabBarLabel: 'Agendar',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ color, size }) => (
    <Icon name="add-circle-outline" size={size} color={color} />
  ),
};
