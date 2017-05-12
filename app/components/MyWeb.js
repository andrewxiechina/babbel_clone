import React, {Component} from 'react';
import {
  Text,
  WebView,
  TouchableOpacity,
  View,
  Dimensions,
  Alert,
} from 'react-native';
var { width, height } = Dimensions.get('window');

export default class MyWeb extends Component {
  webview = null
  postMessage = () => {
    if (this.webview) {
      this.webview.postMessage('"Hello" from React Native!');
    }
  }
  render() {
    return (
      <View style={[{flex: 1}]}>
        <View style={[{backgroundColor: 'orange', flex: 1}]}>
          <WebView
            ref={webview => { this.webview = webview; }}
            source={{uri: 'https://andrewxiechina.github.io/project_ling/html/index.html'}}
            style={{marginTop: 20}}
            automaticallyAdjustContentInsets={false}
            contentInset={{bottom: 0, right: 0}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            scalesPageToFit={true}
          />
        </View>
        <View style={[{flex: 1, position: "absolute", top: 0, left: 0, backgroundColor: 'transparent', height: height}]}>
          <TouchableOpacity onPress={this.postMessage} style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 60, width: width, padding: 15, backgroundColor: 'orange', alignItems: 'center'}}>
              <Text style={[{color: 'white', fontSize: 30, fontWeight: 'bold'}]}>Talk to Haru</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
