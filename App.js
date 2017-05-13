import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Components from './app/components'
export default class App extends React.Component {
  render() {
    return (
      <View style={[{flex: 1}]}>
        <Components />
      </View>
    );
  }
}
