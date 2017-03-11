'use strict';

import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class ImmigrantsRefugees extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listitem}>
          <Text style={styles.name}>Rainbow Refugee Committee (RRC)</Text>
          <Text style={styles.description}>Founded in 2000, Rainbow Refugee
          Committee (RRC) is a Vancouver based community group that supports
          people seeking refugee protection because of persecution based on
          sexual orientation, gender identity, or HIV status.</Text>
          <Text style={styles.contact}>Where: 1170 Bute St, Vancouver</Text>
          <Text style={styles.contact}>Contact: info@rainbowrefugee.ca</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  listitem: {
    alignItems: 'center',
    marginBottom: 25
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center'
  },
  contact: {
    fontSize: 10,
    fontVariant: ['small-caps'],
    textAlign: 'center'
  }
});

module.exports = ImmigrantsRefugees;
