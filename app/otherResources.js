'use strict';

import React, { Component, PropTypes } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class OtherResources extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Resources
        </Text>
      </View>
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

module.exports = OtherResources;
