/*
 * Copyright (c) 2011-2018, Zingaya, Inc. All rights reserved.
 */

'use strict';

import React, { Component } from 'react';
import { 
    createStackNavigator, 
    createSwitchNavigator, 
    createAppContainer, 
    createBottomTabNavigator
} from 'react-navigation';
//import LoginScreen from '../screens/LoginScreen';
import RCTWebRTCDemo from '../screens/MainScreen';
import SettingsScreen from '../screens/SettingsScreen';
//import CallScreen from '../screens/CallScreen';
//import IncomingCallScreen from '../screens/IncomingCallScreen';
import PeopleScreen from '../screens/PeopleScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

import COLOR from '../styles/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';

/*const AppStack = createStackNavigator(
    {
        Main: {
            screen: MainScreen,
        },
        Settings: {
            screen: SettingsScreen,
        }
    },
    {
        headerLayoutPreset: "center",
        navigationOptions: {
            headerStyle: {
                backgroundColor: COLOR.PRIMARY,
            },
            headerTintColor: COLOR.WHITE,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);
*/
const BtmTabStack = createBottomTabNavigator(
    {
/*        Home: {
            screen: AppStack,
            path: 'video',
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor, focused, horizontal }) => (
                    <Ionicons
                        name={'ios-home'}
                        size={horizontal ? 20 : 26}
                        style={{ color: tintColor }}
                    />
                ),
            },
        },
        */
        People: {
            screen: RCTWebRTCDemo,
            path: 'people',
        },
        Chat: {
            screen: ChatScreen,
            path: 'chat',
        },
        Settings: {
            screen: ProfileScreen,
            path: 'Profile',
        },
    },
    {
        tabBarOptions: {
            activeTintColor: '#e91e63',
        },
    }
);

const RootStack = createSwitchNavigator(
    {
        //Login: LoginScreen,
        App: BtmTabStack,
        //Call: CallScreen,
        //IncomingCall: IncomingCallScreen
    },
    {
        initialRouteName: 'App',
    }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;


