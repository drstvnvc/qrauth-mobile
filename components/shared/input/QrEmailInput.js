import React from 'react';
import { TextInput } from 'react-native';

export default function QrEmailInput(props) {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Email Address"
      keyboardType="email-address"
      {...props}
    />
  );
}
