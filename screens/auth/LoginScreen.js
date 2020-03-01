import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import styles from '../../styles/partials/layout';
import { QrEmailInput, QrPasswordInput } from '../../components/shared';
import { login } from '../../store/auth';
import { SCREENS } from '../../constants';

const validationRules = Yup.object().shape({
  email: Yup.string()
    .required()
    .email(),
  password: Yup.string()
    .required('Password is required')
    .min(6),
});

export default function LoginScreen({ navigation: { navigate } }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    if (!validationRules.isValidSync({ email, password })) {
      return;
    }
    dispatch(login(email, password));
  }

  function goToSignup() {
    navigate(SCREENS.AUTH.SIGNUP.INDEX);
  }

  return (
    <View style={styles.screenContainerCenter}>
      <Text>Email</Text>
      <QrEmailInput value={email} onChangeText={setEmail} />

      <Text>Password</Text>
      <QrPasswordInput value={password} onChangeText={setPassword} />

      <Button title="Log in" onPress={handleLogin} />

      <View>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={goToSignup}>
          <Text>Create one</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
