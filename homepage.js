'use strict';

var Map = require('./map');

import React, { Component, PropTypes } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class HomePage extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    // this.props.navigator.push({
    //   title: 'Map',
    //   component: Map
    // });
  }

  render() {
    // const nextRoute = {
    //   component: Map,
    //   title: 'Map',
    //   passProps: { myProp: 'map' }
    // };
    return (
      <View style={styles.container}>
        <Text>{ this.props.title }</Text>
        <TouchableHighlight onPress={this._onForward()}>
          <Text>Map</Text>
        </TouchableHighlight>
      </View>
    )
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

module.exports = HomePage;
