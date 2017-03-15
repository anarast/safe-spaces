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
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      userPosition: null,
      restrooms: null,
      addingRestroom: false,
      newRestroomCoordinate: null,
    }
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  componentWillMount() {
    getRestrooms(this);
  }

  // Center on the user's current position
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState(
          {userPosition: position.coords},
          () => this.centerOnUser(),
        );
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition(
      (position) => {
        this.setState(
          {userPosition: position.coords},
          () => this.centerOnUser(),
        );
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  // Clear the listener for the user's current position
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  centerOnUser() {
    this.setState({
      region: {
        latitude: this.state.userPosition.latitude,
        longitude: this.state.userPosition.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    });
    console.log('centered');
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  addRestroom() {
    this.setState({
      addingRestroom: !this.state.addingRestroom,
      newRestroomCoordinate: (this.state.addingRestroom ? null : this.state.region),
    });
  }

  render() {

    // Don't render if the restrooms haven't been loaded
    if (this.state.restrooms == null)
      return null;

    // Place a restroom marker if user is adding a restroom
    let newRestroomMarker = null;
    if (this.state.addingRestroom) {
      newRestroomMarker = (
        <MapView.Marker draggable
          coordinate={this.state.newRestroomCoordinate}
          pinColor={'#0082f9'}
          onDragEnd={
            (e) => this.setState({
              newRestroomCoordinate: e.nativeEvent.coordinate
            })
          }
        />
      );
    }

    return (
      <View style={styles.container}>

        {/* Map that shows user location */}
        <MapView
          style={styles.map}
          region={this.state.region}
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

          {/* Draggable marker for new restroom */}
          {newRestroomMarker}

        </MapView>
        <Text>{this.state.region.latitude},{this.state.region.longitude}</Text>
        <TouchableOpacity
          onPress={()=> this.addRestroom()}
          activeOpacity={.8}>
          <Text style={styles.buttonText}>Add a restroom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> {
            console.log('centered');
            this.centerOnUser()
          }}
          activeOpacity={.8}>
          <Text style={styles.buttonText}>Center</Text>
        </TouchableOpacity>
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
