'use strict';

var HomePage = require('./homepage');

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SafeSpaces extends Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Safe Spaces',
          component: HomePage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
