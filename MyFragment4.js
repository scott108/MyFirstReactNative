import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ListView } from 'react-native';

export default class MyFragment4 extends Component {
  constructor() {
    super();
  }
  static get defaultProps() {
    return {
      title: 'MyFragment4'
    };
  }

  render() {
    return (
      <Text style={styles.welcome}>
        Welcome to React Native fragment page 4 !!
      </Text>
    )
  }
}

var height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 80,
    textAlign: 'center',
    margin: 10,
    color: 'green',
  },
});
