import React from 'react';
import { Text, View, Button, AsyncStorage } from 'react-native';

import styles from '../../styles/partials/layout';

export default function SignupScreen({ navigation: { navigate } }) {
  async function signup() {
    await AsyncStorage.setItem('user', 'test');
    navigate('AuthLoading');
  }
  function login() {
    navigate('Login');
  }
  return (
    <View style={styles.screenContainerCenter}>
      <Text>Sign up</Text>
      <Button title="Submit" onPress={signup}></Button>
      <Button title="Log in" onPress={login}></Button>
    </View>
  );
}
