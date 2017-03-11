'use strict';

import React, { Component } from 'react';
import { MapView, StyleSheet } from 'react-native';

class Map extends Component {
  render() {
    return (
      <MapView style={styles.container}
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
    flex: 1
  }
});

module.exports = Map;
