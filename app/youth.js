'use strict';

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Youth extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listitem}>
          <Text style={styles.name}>Trans Youth Drop-In</Text>
          <Text style={styles.description}>This is a group for trans, gender
          diverse and questioning youth and their allied peers (siblings,
          friends, partners etc). It is a place to connect with peers and
          adult mentors for discussions, games, recreation activities, and
          great snacks.</Text>
          <Text style={styles.contact}>Where: 2455 Fraser Street, Vancouver</Text>
          <Text style={styles.contact}>When: Every Thursday from 5 – 7 pm</Text>
          <Text style={styles.contact}>Ages: 13-24</Text>
          <Text style={styles.contact}>Contact: Please feel free to email Transcareteam@phsa.ca</Text>
        </View>
        <View style={styles.listitem}>
          <Text style={styles.name}>Qmunity Youth Drop-In (Gab)</Text>
          <Text style={styles.description}>Our youth drop-in is a cool, safe
          place where youth can kick back and talk with friends. It’s also a
          great place to meet people that have similar questions about sexual
          orientation or gender identity.</Text>
          <Text style={styles.contact}>Where: 1170 Bute Street, Vancouver</Text>
          <Text style={styles.contact}>When: Every Wednesday from 4-6 pm and Friday’s from 6-9 pm</Text>
          <Text style={styles.contact}>Ages: 14-25</Text>
          <Text style={styles.contact}>Contact: youth@qmunity.ca for more information</Text>
        </View>
        <View style={styles.listitem}>
          <Text style={styles.name}>AllWays Youth Drop-In</Text>
          <Text style={styles.description}>A drop-in safe space for youth of
          all identities and we meeting weekly and do fun activities.</Text>
          <Text style={styles.contact}>Where: 8880 Williams Rd, Richmond</Text>
          <Text style={styles.contact}>When: Every Tuesday from 4 pm – 6 pm</Text>
          <Text style={styles.contact}>Ages: 13-24</Text>
          <Text style={styles.contact}>Contact: Neela at ngottenbos@richmond.ca</Text>
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

module.exports = Youth;
