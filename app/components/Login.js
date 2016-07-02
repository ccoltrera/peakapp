'use strict';

import React, { Component } from 'react';
import {
  Navigator,
  View,
  TouchableHighlight,
  Text
} from 'react-native';

import styles from '../utils/styles';

class Login extends Component {
  constructor(props) {
    super(props);

    this._navigate = this._navigate.bind(this);
    this._back = this._back.bind(this);
  }

  _navigate(){
    this.props.navigator.push({
      id: 'main',
      title: 'Main', // Matches route.name
    });
  }

  _back(){
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{this.props.title}</Text>
        <TouchableHighlight
          style={{height: 30, width: 60, backgroundColor: 'blue'}}
          onPress={this._back}>
          <Text>Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Login;
