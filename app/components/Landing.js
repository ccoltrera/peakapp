'use strict';

import React, { Component } from 'react';
import {
  Navigator,
  View,
  TouchableHighlight,
  Text,
  Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';

import styles from '../utils/styles';

import Fig from './Fig';

class Landing extends Component {
  constructor(props) {
    super(props);

    this._navigate = this._navigate.bind(this);
  }

  _navigate(){
    this.props.navigator.push({
      id: 'login',
      title: 'Log In', // Matches route.name
    });
  }

  render() {
    var dimensions = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <Text style={styles.landingTitle}>PEAK</Text>
        <Text style={styles.landingTagline}>keep climbing</Text>
        <Swiper style={styles.swiper}
          loop={true}
          showsButtons={false}
          // autoplay={true}
          autoplayTimeout={2.5}
          height={dimensions.height - 220}
          paginationStyle={styles.swiperPagination}
          dot={ <View style={styles.swiperDot} /> }
          activeDot={ <View style={styles.swiperActiveDot} /> }
          >
          <View style={styles.swiperView}>

          </View>
          <View style={styles.swiperView}>

          </View>
          <View style={styles.swiperView}>

          </View>
          <View style={styles.swiperView}>

          </View>
        </Swiper>
        <View style={styles.buttonRow}>
          <TouchableHighlight
            style={[styles.bigButton, styles.bigButtonLeft]}
            onPress={this._navigate}
            underlayColor='rgba(250,250,250,1)'>
            <Text style={styles.bigButtonText}>Log In</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.bigButton, styles.bigButtonRight]}
            onPress={this._navigate}
            underlayColor='rgba(250,250,250,1)'>
            <Text style={styles.bigButtonText}>New User</Text>
          </TouchableHighlight>
        </View>
      {/*
      */}
      </View>
    );
  }
}

export default Landing;
