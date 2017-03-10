'use strict';

var Map = require('./map');
var OtherResources = require('./otherResources');

import React, { Component, PropTypes } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class HomePage extends Component {

  navMap(){
    this.props.navigator.push({
        title: 'Map',
        component: Map
    })
  }

  navResources(){
    this.props.navigator.push({
        title: 'Other Resources',
        component: OtherResources
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.navMap.bind(this)}>
          <Text>Map</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.navResources.bind(this)}>
          <Text>Other Resources</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
});

module.exports = HomePage;
