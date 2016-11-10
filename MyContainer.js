import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    return(
      <this.props.containerFragment/>
    );
  }
}

const styles = StyleSheet.create({

});
