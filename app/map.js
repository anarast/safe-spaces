'use strict';

import React, { Component } from 'react';
import { MapView, StyleSheet, Dimensions, Geolocation } from 'react-native';

var { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

// (Initial Static Location) Vancouver
const LATITUDE = 49.282729;
const LONGITUDE = -123.120738;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

var markers = [
  {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    title: 'Foo Place',
    subtitle: '1234 Foo Drive'
  }
];

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    }
  }

  render() {
    return (
      <MapView
        style={styles.map}
        region={this.state.mapRegion}
        annotations={markers}
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
  map: {
    flex: 1
  }
});

module.exports = Map;
