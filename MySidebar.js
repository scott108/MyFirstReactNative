import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, ListView, TouchableHighlight, Image, Alert } from 'react-native';

import MyContainer from './MyContainer';
import MyFragment1 from './MyFragment1';
import MyFragment2 from './MyFragment2';
import MyFragment3 from './MyFragment3';
import MyFragment4 from './MyFragment4';

export default class MySidebar extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
          'page 1', 'page 2', 'page 3', 'page 4'
        ]),
        containerFragment: MyFragment1,
    };
  }

  static get defaultProps() {
    return {
      title: 'MySidebar'
    };
  }

  _onPressButton(rowID: number) {
    switch (rowID) {
      case '0':
        this.setState({containerFragment: MyFragment1});
        break;
      case '1':
        this.setState({containerFragment: MyFragment2});
        break;
      case '2':
        this.setState({containerFragment: MyFragment3});
        break;
      case '3':
        this.setState({containerFragment: MyFragment4});
        break;
    }
  }

  _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    return (
        <TouchableHighlight
          onPress={() => {
            this._onPressButton(rowID);
            highlightRow(sectionID, rowID);}} >
          <View>
            <View style={styles.row}>
              <Image style={styles.thumb} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
              <Text style={styles.sidebarText}>
                {rowData + ' sidebar'}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
    );
   }

   _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 1 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    );
  }

  _renderHead() {
    return (
      <View style={{height: 50, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 18}}>
          Hello! I am header!
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={styles.sidebar}>
          <ListView
            renderHeader={this._renderHead}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            renderSeparator={this._renderSeparator}
          />
        </View>
        <View style={styles.container}>
          <MyContainer containerFragment={this.state.containerFragment}/>
        </View>
      </View>
    )
  }
}

var height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  sidebar: {
    flex:1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    height: height,
  },
  container: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5dc',
    height: height,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 50,
    height: 50,
  },
  sidebarText: {
    flex: 1,
    fontSize: 20,
    color: '#000',
  },
});
