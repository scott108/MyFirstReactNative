/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Alert,
} from 'react-native';

import MySidebar from './MySidebar'

export default class AwesomeProject extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <ToolbarAndroid
          style={styles.toolbar}
          title="AwesomeApp"
          actions={[{title: 'Settings', show: 'always'}]}
          onActionSelected={this.onActionSelected}
        />
        <MySidebar/>
      </View>
    );
  }

  onActionSelected(position) {
    if (position === 0) { // index of 'Settings'
      Alert.alert("Select setting");
    }
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
