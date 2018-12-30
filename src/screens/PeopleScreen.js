import React from "react";

import BaseNav from './BaseNav';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PeopleScreen extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'People',
      tabBarIcon: ({ tintColor, focused, horizontal }) => (
        <Ionicons
          name={'ios-people'}
          size={horizontal ? 20 : 26}
          style={{ color: tintColor }}
        />
      ),
    };
    componentDidMount() {
      // this._s0 = this.props.navigation.addListener('willFocus', this._onEvent);
      // this._s1 = this.props.navigation.addListener('didFocus', this._onEvent);
      // this._s2 = this.props.navigation.addListener('willBlur', this._onEvent);
      // this._s3 = this.props.navigation.addListener('didBlur', this._onEvent);
    }
    componentWillUnmount() {
      // this._s0.remove();
      // this._s1.remove();
      // this._s2.remove();
      // this._s3.remove();
    }
    _onEvent = a => {
      console.log('EVENT ON PEOPLE TAB', a.type, a);
    };
    render() {
      const { navigation } = this.props;
      return <BaseNav banner="People Tab" navigation={navigation} />;
    }
  }