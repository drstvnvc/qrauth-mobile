import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import { navigate } from '../../../services/NavigationService';
import { SCREENS } from '../../../constants';
import { QrTextInput } from '../../../components/shared';
import styles from '../../../styles/partials/layout';

export default function NameScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function confirmAndContinue() {
    const userBuilder = navigation.getParam('userBuilder');
    userBuilder.setFirstName(firstName);
    userBuilder.setLastName(lastName);

    navigate(SCREENS.AUTH.SIGNUP.AVATAR, { userBuilder });
  }

  return (
    <View style={styles.screenContainerCenter}>
      <Text>First Name</Text>
      <QrTextInput
        autoCapitalize="words"
        value={firstName}
        onChangeText={setFirstName}
        autoFocus={true}
      />

      <Text>Last Name</Text>
      <QrTextInput autoCapitalize="words" value={lastName} onChangeText={setLastName} />

      <Button title="Next" onPress={confirmAndContinue}></Button>
    </View>
  );
}
