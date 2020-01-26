import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import MainNavigator from './MainNavigator';
import AuthStack from './auth/AuthNavigator';
import { SCREENS } from '../constants';

export default createAppContainer(
  createSwitchNavigator(
    {
      // https://reactnavigation.org/docs/en/auth-flow.html
      [SCREENS.AUTH_LOADING]: AuthLoadingScreen,
      [SCREENS.AUTH.INDEX]: AuthStack,
      [SCREENS.MAIN.INDEX]: MainNavigator
    },
    {
      initialRouteName: SCREENS.AUTH_LOADING
    }
  )
);
