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
var MapView = require('react-native-maps');

var { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

// (Initial Static Location) Vancouver
const LATITUDE = 49.282729;
const LONGITUDE = -123.120738;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

var localIp = '192.168.1.94';

var RESPONSE = [
  {
    street: 'Granville',
    city: 'Vancouver',
    province: 'BC',
    country: 'Canada',
    comments: ['What a relief!', 'Kinda crappy!'],
    upvotes: 5,
    downvotes: 6,
    latitude: LATITUDE,
    longitude: LONGITUDE,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    street: 'Burrard',
    city: 'Vancouver',
    province: 'BC',
    country: 'Canada',
    comments: ['Got there just in time!', 'Smells fresh!'],
    upvotes: 10,
    downvotes: 2,
    latitude: LATITUDE + 0.002,
    longitude: LONGITUDE + 0.002,
    created_at: new Date(),
    updated_at: new Date(),
  },
]

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
      markers: null,
      modalVisible: false,
    }
  }

  componentWillMount() {
    this.getRestrooms();
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  // Fetch markers and build out the markers objects
  getRestrooms() {
    return fetch('http://' + localIp + ':3000/api/getRestrooms')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.plotRestrooms(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  plotRestrooms(response) {
    var markers = [];
    console.log(response);
    for (var i = 0; i < response.length; i++) {
      console.log(response[i].street);
      let totalVotes = response[i].upvotes + response[i].downvotes;
      let percLiked = Math.round((response[i].upvotes / totalVotes) * 100);
      markers.push({
        latlng: {latitude: response[i].latitude, longitude: response[i].longitude},
        title: response[i].street,
        description: percLiked + "% liked", // if only a few ratings say 2 in 3 liked
        tintColor: (percLiked > 50 ? 'green' : 'red'),
      });
    }
    this.setState({markers: markers});
  }

  render() {
    if (this.state.markers == null)
      return null;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          onRegionChange={this.onRegionChange}
          showsUserLocation={true}
        >
          {this.state.markers.map((marker, i) => (
            <MapView.Marker
              key={i}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
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
