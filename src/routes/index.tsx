import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { Icon } from './styles';

import { theme } from '../global';
import { Home, Login, Register } from '../views';
import { RootStackParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const HeaderIcon = () => <Icon />;

const options: NativeStackNavigationOptions = {
  headerLeft: HeaderIcon,
  headerShown: true,
  headerStyle: {
    backgroundColor: theme.colors.new.header,
  },
  headerTintColor: theme.colors.new.header,
  headerTitleStyle: {
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  contentStyle: { backgroundColor: theme.colors.base.gray200 },
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
};

const routes = () => {
  return (
    <Navigator initialRouteName="Login" screenOptions={options}>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default routes;
