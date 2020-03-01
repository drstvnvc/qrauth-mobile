import React from 'react';
import { TextInput } from 'react-native';

export default function QrEmailInput(props) {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      autoCompleteType="email"
      placeholder="Email Address"
      keyboardType="email-address"
      {...props}
    />
  );
}
