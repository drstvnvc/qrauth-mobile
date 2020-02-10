import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function QrPasswordInput(props) {
  const [isVisible, setIsVisible] = useState(false);

  function toggleIsVisible() {
    setIsVisible(!isVisible);
  }

  return (
    <View style={style.wrapper}>
      <TextInput
        autoCapitalize="none"
        placeholder="Password"
        {...props}
        secureTextEntry={!isVisible}
      />
      <View style={style.eyeWrapper}>
        <Entypo
          name={!isVisible ? 'eye' : 'eye-with-line'}
          size={style.eyeWrapper.width}
          onPress={toggleIsVisible}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  eyeWrapper: {
    height: 32,
    width: 32,
  },
});
