import React from 'react';
import { AsyncStorage, Text, View, Button, TextInput } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';

import style from '../styles/partials/layout';

function HomeScreen({ navigation }) {

  function logout() {
    AsyncStorage.removeItem('user');
    navigation.navigate('AuthLoading');
  }
  return (
    <View style={style.screenContainerCenter}>
      <Text>Home screen</Text>
      <TextInput></TextInput>
      <Button
        title="Open scanner"
        onPress={() => {
          console.log('navigate scanner');
          navigation.navigate('Scanner');
        }}
      ></Button>
      <Button
        title="Log out"
        onPress={logout}
      ></Button>
    </View>
  );
}

function ScannerScreen({ navigation }) {
  return (
    <View style={style.screenContainerCenter}>
      <Text>Scanner screen</Text>
      <TextInput></TextInput>

      <Button
        title="Confirm"
        onPress={() => {
          navigation.navigate('SecurityPin');
        }}
      ></Button>
      <Button
        title="Cancel"
        onPress={() => {
          navigation.goBack();
        }}
      ></Button>
      <Button
        title="Open drawer"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      ></Button>
    </View>
  );
}

function SecurityPinScreen({ navigation: { navigate, goBack } }) {
  return (
    <View style={style.screenContainerCenter}>
      <Text>Scanner screen</Text>
      <TextInput></TextInput>

      <Button
        title="Go back"
        onPress={() => {
          goBack();
        }}
      ></Button>
      <Button
        title="Go home"
        onPress={() => {
          navigate('Home');
        }}
      ></Button>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={style.screenContainerCenter}>
      <Text>Settings screen</Text>
    </View>
  );
}

function AccountScreen({ navigation: { navigate } }) {
  return (
    <View style={style.screenContainerCenter}>
      <Text>Account screen</Text>
      <Button
        title="Go home"
        onPress={() => {
          navigate('HomeStack');
        }}
      ></Button>
    </View>
  );
}

const MainNavigator = createDrawerNavigator({
  HomeStack: createSwitchNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
          title: 'HOME'
        })
      },
      Scanner: {
        screen: ScannerScreen,
        navigationOptions: () => ({
          title: 'Scanner'
        })
      },
      SecurityPin: {
        screen: SecurityPinScreen,
        navigationOptions: () => ({
          title: 'Security pin'
        })
      }
    },
    {
      headerMode: 'float'
    }
  ),
  Settings: {
    screen: SettingsScreen
  },
  Account: {
    screen: AccountScreen
  }
});

export default MainNavigator;

// export default createStackNavigator({
//   Home: HomeScreen,
//   Scanner: ScannerScreen,
//   SecurityPin: SecurityPinScreen
// });
