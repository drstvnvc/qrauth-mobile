import React from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

import styles from '../../styles/partials/layout';

export default function LoginScreen({ navigation: { navigate } }) {
  async function login() {
    await AsyncStorage.setItem('user', 'test');
    console.log('LOGIN');
    navigate('AuthLoading');
  }
  function signup() {
    console.log('Sign up');
    navigate('Signup');
  }

  return (
    <View style={styles.screenContainerCenter}>
      <Text>Log in</Text>
      <Text>Email</Text>
      <Text>Password</Text>
      <Button title="Log in" onPress={login}>
      </Button>
      <Button title="Sign up" onPress={signup}>
      </Button>
    </View>
  );
}
