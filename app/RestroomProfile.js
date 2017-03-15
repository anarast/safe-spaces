'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class RestroomProfile extends Component {
  render() {
    return(
      <View>
        <Text style={styles.title}>
          {this.props.marker.title}
        </Text>
        <Text style={styles.likePerc}>
          {this.props.marker.description}
        </Text>
        <View style={styles.voteContainer}>
          <Image
            style={{width: 12, height: 12}}
            source={require('../img/ic_thumb_up_3x.png')}
          />
          <Text style={styles.voteText}>
            {this.props.marker.upvotes}
          </Text>
          <Image
            style={{width: 12, height: 12}}
            source={require('../img/ic_thumb_down_3x.png')}
          />
          <Text style={styles.voteText}>
            {this.props.marker.downvotes}
          </Text>
        </View>
        <Text style={styles.commentsCount}>
          {this.props.marker.comments.length} comments
        </Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: '#0082f9',
  },
  likePerc: {
    fontSize: 12,
  },
  voteContainer: {
    marginTop: 2,
    marginBottom: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voteText: {
    fontSize: 12,
  },
  commentsCount: {
    fontSize: 12,
  },
});
