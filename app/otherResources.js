'use strict';

var Family = require('./family');
var Youth = require('./youth');
var ImmigrantsRefugees = require('./immigrantsRefugees');

import React, { Component, PropTypes } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

class OtherResources extends Component {

  navFamily(){
    this.props.navigator.push({
      title: 'Family Resources',
      component: Family
    })
  }

  navYouth(){
    this.props.navigator.push({
      title: 'Youth Resources',
      component: Youth
    })
  }

  navImmigrantsRefugees(){
    this.props.navigator.push({
      title: 'Immigrants and Refugees Resources',
      component: ImmigrantsRefugees
    })
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.list}>
            <TouchableHighlight onPress={this.navYouth.bind(this)}
                                underlayColor={'white'}
                                activeOpacity={0.5}>
              <View>
                <Image
                  source={require('./images/teenagers.jpeg')}
                  style={{width: deviceWidth, height: deviceHeight/3, resizeMode: 'cover'}}>
                    <Text style={{fontSize: 32, color: 'white', fontWeight: 'bold', textAlign:'center', marginTop:80, marginBottom: 40}}>
                      YOUTH
                    </Text>
                  </Image>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.navFamily.bind(this)}
                                underlayColor={'white'}
                                activeOpacity={0.5}>
              <View>
                <Image
                  source={require('./images/adults.jpeg')}
                  style={{width: deviceWidth, height: deviceHeight/3, resizeMode: 'cover'}}>
                  <Text style={{fontSize: 32, color: 'white', fontWeight: 'bold', textAlign:'center', marginTop:80, marginBottom: 40}}>
                    FAMILY
                  </Text>
                </Image>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.navImmigrantsRefugees.bind(this)}
                                underlayColor={'white'}
                                activeOpacity={0.5}>
              <View>
                <Image
                  source={require('./images/refugees.jpg')}
                  style={{width: deviceWidth, height: deviceHeight/3, resizeMode: 'cover'}}>
                  <Text style={{fontSize: 32, color: 'white', fontWeight: 'bold', textAlign:'center', marginTop:80, marginBottom: 40}}>
                    REFUGEES
                  </Text>
                </Image>
              </View>
            </TouchableHighlight>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
    flex: 1
  },
  list: {
    alignItems: 'center',
  },
  listitem: {
    fontSize: 20,
    marginBottom: 100
  },
  banner: {
    resizeMode: "contain"
  }
});

module.exports = OtherResources;
