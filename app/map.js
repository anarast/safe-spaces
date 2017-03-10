'use strict';

import React, { Component } from 'react';
import { MapView, StyleSheet } from 'react-native';

class Map extends Component {
  render() {
    return (
      <MapView
        style={{height: 200, margin: 40}}
        showsUserLocation={true}
      />
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

module.exports = Map;
