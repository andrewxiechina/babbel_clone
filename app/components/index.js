import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import StudyList from './StudyList';
import Theme from './Theme';
import {Constants} from 'expo';


var img1 = "https://upload.wikimedia.org/wikipedia/en/6/65/Hello_logo_sm.gif";
var img2 = "https://gcsagents.com/wp-content/uploads/2015/08/The-Value-of-a-Smile.jpg"
export default class Root extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <StatusBar barStyle="light-content" />
          <StudyList />
        </View>
      </View>
    );
  }
}
