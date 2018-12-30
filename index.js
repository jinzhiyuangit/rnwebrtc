/*
 * Copyright (c) 2011-2018, Zingaya, Inc. All rights reserved.
 */

'use strict';

import { AppRegistry, Platform } from 'react-native';
import App from './App';
//import RCTWebRTCDemo from './src/screens/MainScreen'
//import PushBackground from './src/manager/PushBackground'
if (!window.navigator.userAgent) {
    window.navigator.userAgent = "react-native";
}
AppRegistry.registerComponent('VoximplantDemo', () => App);

//if (Platform.OS === 'android') {
//    AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => PushBackground);
//}
