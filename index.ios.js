import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Navigation from './app/components/Navigation'

class Peak extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}

AppRegistry.registerComponent('Peak', () => Peak);
