import React from 'react';
import { TextInput } from 'react-native';

export default function QrTextInput(props) {
  return <TextInput autoCapitalize="none" {...props} />;
}
