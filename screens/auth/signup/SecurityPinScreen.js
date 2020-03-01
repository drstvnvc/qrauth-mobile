import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { QrSecurityPinInput } from '../../../components/shared';
import styles from '../../../styles/partials/layout';
import { signup } from '../../../store/auth';

export default function SecurityPinScreen({ navigation }) {
  const dispatch = useDispatch();
  const [securityPin, setSecurityPin] = useState('');

  function confirm() {
    const userBuilder = navigation.getParam('userBuilder');
    userBuilder.setSecurityPin(securityPin);

    dispatch(signup(userBuilder.build()));
  }

  return (
    <View style={styles.screenContainerCenter}>
      <Text>Security pin</Text>
      <QrSecurityPinInput isVisible={true} onChangeSecurityPin={setSecurityPin} />
      <Button title="Next" onPress={confirm}></Button>
    </View>
  );
}
