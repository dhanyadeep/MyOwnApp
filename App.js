import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './Screens/HomeScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import FertilizerScreen from './Screens/FertilizerScreen';
import PesticideScreen from './Screens/PesticideScreen';
import SeedScreen from './Screens/SeedScreen';
import SoilScreen from './Screens/SoilScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Appcontainer />
      </View>
    );
  }
}

var switchContainer = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  HomeScreen: { screen: HomeScreen },
  Drawer: { screen: AppDrawerNavigator },
  FertilizerScreen: { screen: FertilizerScreen },
  PesticideScreen: { screen: PesticideScreen },
  SeedScreen: { screen: SeedScreen },
  SoilScreen: { screen: SoilScreen },
});
const Appcontainer = createAppContainer(switchContainer);
