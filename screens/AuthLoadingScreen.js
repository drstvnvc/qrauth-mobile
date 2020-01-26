import React, { useEffect, useState } from 'react';
import {
  AsyncStorage,
  ActivityIndicator,
  StatusBar,
  Text,
  View
} from 'react-native';

export default function({ navigation }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    bootstrapAsync();
  }, []);

  async function bootstrapAsync() {
    const user = await AsyncStorage.getItem('user');
    navigation.navigate(user ? 'Main' : 'Auth');
  }

  return (
    <View>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  );
}
