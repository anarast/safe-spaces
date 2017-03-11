'use strict';

import React, { Component } from 'react';
import { MapView, StyleSheet, Dimensions, Geolocation, TouchableOpacity, Alert, Image } from 'react-native';

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
    subtitle: '73% liked', // if only a few ratings say 2 in 3 liked
    tintColor: 'green',
    rightCalloutView: (
      <TouchableOpacity
        onPress={() => {
          alert('You Are Here');
        }}>
        <Image
          style={{width:30, height:30}}
          source={require('./ic_timer_3x.png')}
        />
      </TouchableOpacity>
    ),
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

  // Fetch markers and build out the markers objects
  getMarkers() {
    // fetch()
  }

  render() {
    return (
      <MapView
        style={styles.map}
        region={this.state.mapRegion}
        annotations={markers}
        showsUserLocation={true}
        followUserLocation={true}
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
