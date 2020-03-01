import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

const DEFAULT_PIN = ['', '', '', ''];

export default function QrSecurityPinInput({ onChangeSecurityPin, isVisible = false }) {
  const [securityPin, setPin] = useState(DEFAULT_PIN);
  const pinInputs = [];

  function handleChangeText(text, index) {
    securityPin[index] = text;
    setPin([...securityPin]);

    if (!text) {
      return;
    }

    if (index < securityPin.length - 1) {
      pinInputs[index + 1].focus();
    } else {
      pinInputs[index].blur();
      onChangeSecurityPin(securityPin.join(''));
    }
  }

  return (
    <View>
      {securityPin.map((digit, index) => (
        <TextInput
          keyboardType="number-pad"
          clearTextOnFocus={true}
          secureTextEntry={!isVisible}
          key={index}
          value={digit}
          onChangeText={text => handleChangeText(text, index)}
          autoFocus={index === 0}
          ref={ref => {
            pinInputs[index] = ref;
          }}
        />
      ))}
    </View>
  );
}
