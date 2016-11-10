import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, ListView, Navigator, Alert } from 'react-native';

import MySidebar from './MySidebar';
import MyFragment1 from './MyFragment1';
import MyFragment2 from './MyFragment2';
import MyFragment3 from './MyFragment3';
import MyFragment4 from './MyFragment4';

export default class MyContainer extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  static get defaultProps() {
    return {
      title: 'MyContainer'
    };
  }
  render() {
    switch (this.props.fragmentID) {
      case '0':
        return(
          <MyFragment1/>
        );
        break;
      case '1':
        return(
          <MyFragment2/>
        );
        break;
      case '2':
        return(
          <MyFragment3/>
        );
        break;
      case '3':
        return(
          <MyFragment4/>
        );
        break;
      default:
        return(
          <MyFragment1/>
        );
    }
  }
}

var height = Dimensions.get('window').height;

const styles = StyleSheet.create({

});
