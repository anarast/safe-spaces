'use strict';

import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Family extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listitem}>
          <Text style={styles.name}>Parenting Gender Diverse Youth Drop-In for Parents</Text>
          <Text style={styles.description}>Group focusing on building
          resiliency skills within parents and providing resources and support
          that are specific to gender diverse youth.</Text>
          <Text style={styles.contact}>Where: 203-1111 Lonsdale Avenue, North Vancouver</Text>
          <Text style={styles.contact}>When: Tuesday 6 pm - 8 pm</Text>
          <Text style={styles.contact}>Contact: watson@familyservices.bc.ca or 604-988-5281</Text>
        </View>
        <View style={styles.listitem}>
          <Text style={styles.name}>PFLAG Vancouver (Parents & Friends of LGBT)</Text>
          <Text style={styles.description}>PFLAG provides support for all
          family members and friends of gay, lesbian, bisexual and trans people.</Text>
          <Text style={styles.contact}>Where: Various meeting locations in Vancouver</Text>
          <Text style={styles.contact}>When: Monthly meetings - please see website</Text>
          <Text style={styles.contact}>Contact: 604-626-5667; info@pflagvancouver.com; www.pflagvancouver.com</Text>
        </View>
        <View style={styles.listitem}>
          <Text style={styles.name}>Adult Drop-In Group for Gender Diverse and Trans People (THiP)</Text>
          <Text style={styles.description}>We are piloting a new adult drop-in
          group for gender diverse and trans people. This group incorporates a
          variety of activities, including discussions, guest speakers,
          community building, and social opportunities.</Text>
          <Text style={styles.contact}>Where: Room 150, 1290 Hornby Street, Vancouver</Text>
          <Text style={styles.contact}>When: 1st and 3rd Fridays of the month, 5-7 pm</Text>
          <Text style={styles.contact}>Contact: transcareteam@phsa.ca</Text>
        </View>
      </View>
    )
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
    marginBottom: 25,
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

module.exports = Family;
