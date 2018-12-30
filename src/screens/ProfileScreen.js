
import React from "react";

import BaseNav from './BaseNav';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default ProfileScreen = ({ navigation }) => (
  <BaseNav banner="Settings Tab" navigation={navigation} />
);

ProfileScreen.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor, focused, horizontal }) => (
    <Ionicons
      name="ios-settings"
      size={horizontal ? 20 : 26}
      style={{ color: tintColor }}
    />
  ),
};