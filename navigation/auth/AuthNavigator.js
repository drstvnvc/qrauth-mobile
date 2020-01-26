import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignupScreen from '../../screens/auth/SignupScreen';
import { SCREENS } from '../../constants';

const AuthStack = createStackNavigator(
  {
    [SCREENS.AUTH.LOGIN]: LoginScreen,
    [SCREENS.AUTH.SIGNUP]: SignupScreen
  },
  {
    initialRouteName: SCREENS.AUTH.LOGIN,
    headerMode: 'none'
  }
);

export default AuthStack;
