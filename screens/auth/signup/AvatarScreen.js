import React from 'react';
import { View, Text, Button } from 'react-native';

import { navigate } from '../../../services/NavigationService';
import { SCREENS } from '../../../constants';
import styles from '../../../styles/partials/layout';

export default function AvatarScreen({ navigation }) {
  function confirmAndContinue() {
    const userBuilder = navigation.getParam('userBuilder');

    navigate(SCREENS.AUTH.SIGNUP.SECURITY_PIN, { userBuilder });
  }

  return (
    <View style={styles.screenContainerCenter}>
      <Text>Avatar</Text>
      <Button title="Next" onPress={confirmAndContinue}></Button>
    </View>
  );
}
