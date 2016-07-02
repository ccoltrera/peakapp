'use strict';

import React, { Component } from 'react';
import {
  Navigator,
  View,
  TouchableHighlight,
  Text
} from 'react-native';

import styles from '../utils/styles';

import Landing from './Landing';
import Login from './Login';

class Navigation extends Component {
  renderScene(route, navigator) {
    switch (route.id) {
      case 'landing':
       return <Landing navigator={navigator} />
      case 'login':
       return <Login navigator={navigator} />
     }
  }

  render() {
    return(
      <Navigator
        style={styles.navigator}
        initialRoute={{
          id: 'landing',
          name: 'Peak' }}
        renderScene={ this.renderScene } />
    )
  }
}

export default Navigation;
