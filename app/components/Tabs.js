import React from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import Contacts from './Contacts';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Ionicons } from '@expo/vector-icons';
import style from './style'

export default class Tabs extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={[style.bgPrimary, style.tabTop]}>
          <Text style={[style.h3, style.white, {marginLeft: 15}]}>WhatsApp</Text>
          <View style={[style.row, {marginRight: 10}]}>
            <Ionicons name="ios-search" color='#fff' size={23} style={{ padding:10 }} />
            <Ionicons name="ios-chatbubbles-outline" color='#fff' size={23} style={{ padding:10 }} />
            <Ionicons name="ios-more" color='#fff' size={23} style={{ padding:10 }} />
          </View>
        </View>
        <ScrollableTabView
          tabBarUnderlineStyle={{backgroundColor: '#fff', height: 2}}
          tabBarTextStyle={{fontSize: 16}}
          tabBarBackgroundColor ='#075e54'
          tabBarActiveTextColor="#fff"
          tabBarInactiveTextColor="#88b0ac"
          >
          <Contacts tabLabel="Contacts" />
          <Contacts tabLabel="Flow" />
          <Contacts tabLabel="Jest" />
        </ScrollableTabView>
      </View>
    );
  }
}
