import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import { SCREENS } from '../../constants';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignUpNavigator from './SignUpNavigator';

const AuthStack = createStackNavigator(
  {
    [SCREENS.AUTH.LOGIN]: LoginScreen,
    [SCREENS.AUTH.SIGNUP.INDEX]: SignUpNavigator,
  },
  {
    initialRouteName: SCREENS.AUTH.LOGIN,
    headerMode: 'none',
  }
);

export default AuthStack;
