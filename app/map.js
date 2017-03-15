'use strict';

import React, { Component } from 'react';
import {
  View,
  Modal,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  Geolocation,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import RestroomProfile from './RestroomProfile';
import MapView from 'react-native-maps';
import { getRestrooms } from './scripts/apiCalls'

var { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

// (Initial Static Location) Vancouver
const LATITUDE = 49.282729;
const LONGITUDE = -123.120738;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: {
        latitude: 49.282799,
        longitude: -123.120768,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      restrooms: null,
    }
  }

  componentWillMount() {
    getRestrooms(this);
  }

  render() {
    if (this.state.restrooms == null)
      return null;
    return (
      <View style={styles.container}>

        {/* Map that shows user location */}
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          onRegionChange={this.onRegionChange}
          showsUserLocation={true}
        >

          {/* Markers showing restrooms on the map */}
          {this.state.restrooms.map((restroom, i) => (
            <MapView.Marker
              key={i}
              coordinate={{
                latitude: restroom.latitude,
                longitude: restroom.longitude
              }}
              title={restroom.title}
              description={restroom.description}
              pinColor={(restroom.upvotes/(restroom.downvotes+restroom.upvotes) > .5 ? 'green' : 'red')}
            >

              {/* Custom callout for markers showing restroom info */}
              <MapView.Callout>
                <RestroomProfile
                  restroom={restroom}
                />
              </MapView.Callout>

            </MapView.Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
