import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import ImageFramed from './ImageFramed'
import ButtonBlock from './ButtonBlock'

var img1 = "https://upload.wikimedia.org/wikipedia/en/6/65/Hello_logo_sm.gif";
var img2 = "https://gcsagents.com/wp-content/uploads/2015/08/The-Value-of-a-Smile.jpg"
export default class Root extends React.Component {
  render() {
    return (
      <View style={[{paddingTop: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}]}>
        <ButtonBlock title="Continue" />
      </View>
    );
  }
}
