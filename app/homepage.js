'use strict';

var Map = require('./map');
var OtherResources = require('./otherResources');

import React, { Component, PropTypes } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

class HomePage extends Component {

  navMap(){
    this.props.navigator.push({
        title: 'Map',
        component: Map
    })
  }

  navResources(){
    this.props.navigator.push({
        title: 'Other Resources',
        component: OtherResources
    })
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.list}>
            <TouchableHighlight onPress={this.navMap.bind(this)}
                                underlayColor={'transparent'}
                                activeOpacity={0.5}>
              <View>
                <Image
                  source={require('./images/bathroom.jpeg')}
                  style={{width: deviceWidth, height: deviceHeight*(4/6), resizeMode: 'cover'}}>
                    <Text style={{fontSize: 35, color: 'white', fontWeight: 'bold', textAlign:'center', marginTop:125, marginBottom: 40}}>
                      FIND ME A RESTROOM!
                    </Text>
                  </Image>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.navResources.bind(this)}
                                underlayColor={'transparent'}
                                activeOpacity={0.5}>
              <View>
                <Image
                  source={require('./images/otherresources.jpeg')}
                  style={{width: deviceWidth, height: deviceHeight*(2/6), resizeMode: 'cover'}}>
                  <Text style={{fontSize: 35, color: 'white', fontWeight: 'bold', textAlign:'center', marginTop:80, marginBottom: 40}}>
                    OTHER RESOURCES
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
    //padding: 30,
    marginTop: 90,
    alignItems: 'center',
    flex: 1
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  listitem: {
    fontSize: 20,
    marginBottom: 100
  },
  banner: {
    resizeMode: "contain"
  }
});

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this.navMap.bind(this)}
//                             underlayColor={'white'}
//                             activeOpacity={0.5}>
//           <Text style={styles.description}>Map</Text>
//         </TouchableHighlight>
//         <TouchableHighlight onPress={this.navResources.bind(this)}
//                             underlayColor={'white'}
//                             activeOpacity={0.5}>
//           <Text style={styles.description}>Other Resources</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   description: {
//     marginBottom: 20,
//     fontSize: 28,
//     textAlign: 'center',
//     color: '#656565'
//   },
//   container: {
//     padding: 30,
//     marginTop: 65,
//     alignItems: 'center'
//   }
// });

module.exports = HomePage;
