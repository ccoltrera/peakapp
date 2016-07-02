import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  bigButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    width: ((width * 0.5) - 20),
  },
  bigButtonLeft: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 2,
    marginRight: -1
  },
  bigButtonRight: {
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 10,
    marginLeft: -1
  },
  bigButtonText: {
    color: 'rgba(74,74,74,1)',
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: '600'
  },
  buttonRow: {
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'rgba(250,250,250,1)'
  },
  landingTagline: {
    color: 'rgba(74,74,74,1)',
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: '500'
  },
  landingTitle: {
    color: 'rgba(74,74,74,1)',
    fontFamily: 'System',
    fontSize: 83,
    fontWeight: '700'
  },
  navigator: {
    backgroundColor: 'rgba(250,250,250,1)',
    flex: 1
  },
  smallCenterBox: {
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    height: (height * 0.5),
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 35,
    width: (width * 0.6),
  },
  swiperActiveDot: {
    backgroundColor:'rgba(0,0,0,0.9)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 55,
    marginBottom: 20,
  },
  swiperDot: {
    backgroundColor:'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 55,
    marginBottom: 20,
  },
  swiperPagination: {
    bottom: 0
  }
});

export default styles;
