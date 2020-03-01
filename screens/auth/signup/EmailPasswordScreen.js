import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import { navigate } from '../../../services/NavigationService';
import { SCREENS } from '../../../constants';
import { QrEmailInput, QrPasswordInput } from '../../../components/shared';
import styles from '../../../styles/partials/layout';
import UserBuilder from '../../../models/UserBuilder';

export default function EmailPasswordScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  function confirmAndContinue() {
    const userBuilder = new UserBuilder();
    userBuilder.setEmail(email);
    userBuilder.setPassword(password);
    userBuilder.setPasswordConfirmation(passwordConfirmation);

    navigate(SCREENS.AUTH.SIGNUP.FIRST_AND_LAST_NAME, { userBuilder });
  }

  function goToLogin() {
    navigate(SCREENS.AUTH.LOGIN);
  }

  return (
    <View style={styles.screenContainerCenter}>
      <Text>Email</Text>
      <QrEmailInput value={email} onChangeText={setEmail} autoFocus={true} />

      <Text>Password</Text>
      <QrPasswordInput value={password} onChangeText={setPassword} />

      <Text>Confirm password</Text>
      <QrPasswordInput value={passwordConfirmation} onChangeText={setPasswordConfirmation} />

      <Button title="Next" onPress={confirmAndContinue} />

      <View>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={goToLogin}>
          <Text>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
