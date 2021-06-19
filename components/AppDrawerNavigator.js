import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu  from './CustomSideBarMenu';
import HomeScreen from '../Screens/HomeScreen';
import SettingScreen from '../Screens/SettingScreen';
import {Icon} from 'react-native-elements'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : HomeScreen,
    navigationOptions:{drawerIcon:<Icon
              name="home"
              type="fontawesome5"
          
            />}
    },
  
  Setting : {
    screen : SettingScreen,
     navigationOptions:{drawerIcon:<Icon
              name="settings"
              type="fontawesome5"
            />}
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
