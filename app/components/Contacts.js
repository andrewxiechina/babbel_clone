import React from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      /* Setup status bar to be white and view to extend to whole screen */
      <View style={{flex: 1}}>
        <Text>Tabs</Text>
      </View>
    );
  }
}
