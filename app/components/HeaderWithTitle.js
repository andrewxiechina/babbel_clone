import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ListView,
} from 'react-native';
import Theme from './Theme'

export default class HeaderWithTitle extends React.Component {
  render() {
    return (
          <View style={[styles.header]}>
            <Text style={[styles.headerTextSmall]}>Lesson 101</Text>
            <Text style={[styles.headerText]}>Introducing Yourself</Text>
          </View>
    );
  }
}

var styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
    padding: 10,
    justifyContent: 'flex-end',
  },
  headerText: {
    color: 'white',
    fontSize: Theme.h3,
    fontWeight: 'bold'
  },
  headerTextSmall: {
    fontSize: Theme.normal,
    color: Theme.mutedColor,
  },
  });
