import React, {Component} from 'react';
import {
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
  WebView,
} from 'react-native';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://avgjs.github.io/pixi-live2d-example/'}}
        style={{marginTop: 20}}
        automaticallyAdjustContentInsets={false}
        contentInset={{bottom: 0, right: 0}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scalesPageToFit={true}
      />
    );
  }
}
