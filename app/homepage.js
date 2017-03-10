'use strict';

var Map = require('./map');

import React, { Component, PropTypes } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class HomePage extends Component {

  navSecond(){
    this.props.navigator.push({
        title: 'Map',
        component: Map
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.navSecond.bind(this)}>
          <Text>Map</Text>
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
