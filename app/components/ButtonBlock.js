import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class ImageFramed extends React.Component {
  render() {
    return (
        <TouchableOpacity style={[styles.buttonBlock]}>
          <Text style={[styles.buttonBlockText]}>Continue</Text>
        </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  buttonBlock: {
      backgroundColor: "orange",
      paddingTop: 8,
      paddingBottom: 8,
      marginLeft: 10,
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      borderRadius: 5,
    },
  buttonBlockText: {
    fontSize: 22,
    color: 'white'
  }
});
