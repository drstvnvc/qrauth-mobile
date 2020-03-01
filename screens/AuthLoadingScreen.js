import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { userSelector, setActiveUser } from '../store/auth';
import { navigate } from '../services/NavigationService';
import authService from '../services/apiServices/AuthService';
import { SCREENS } from '../constants';

export default function AuthLoadingScreen({ navigation }) {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    bootstrapAsync();
  }, []);

  async function bootstrapAsync() {
    if (user) {
      navigate(SCREENS.MAIN.INDEX);
      return;
    }
    const loggedInUser = await authService.getCurrentUser();
    dispatch(setActiveUser(loggedInUser));
    navigate(loggedInUser ? SCREENS.MAIN.INDEX : SCREENS.AUTH.INDEX);
  }

  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
}
