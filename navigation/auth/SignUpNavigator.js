import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import { SCREENS } from '../../constants';
import EmailPasswordScreen from '../../screens/auth/signup/EmailPasswordScreen';
import NameScreen from '../../screens/auth/signup/NameScreen';
import AvatarScreen from '../../screens/auth/signup/AvatarScreen';
import SecurityPinScreen from '../../screens/auth/signup/SecurityPinScreen';

export default createStackNavigator(
  {
    [SCREENS.AUTH.SIGNUP.EMAIL_AND_PASSWORD]: EmailPasswordScreen,
    [SCREENS.AUTH.SIGNUP.FIRST_AND_LAST_NAME]: NameScreen,
    [SCREENS.AUTH.SIGNUP.AVATAR]: AvatarScreen,
    [SCREENS.AUTH.SIGNUP.SECURITY_PIN]: SecurityPinScreen,
  },
  {
    initialRouteName: SCREENS.AUTH.SIGNUP.EMAIL_AND_PASSWORD,
    headerMode: 'none',
  }
);
