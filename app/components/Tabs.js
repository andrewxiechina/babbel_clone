import React from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import Contacts from './Contacts';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class Tabs extends React.Component {
  render() {
    return (
      /* Setup status bar to be white and view to extend to whole screen */
      <ScrollableTabView>
        <Contacts tabLabel="Contacts" />
        <Contacts tabLabel="Flow" />
        <Contacts tabLabel="Jest" />
      </ScrollableTabView>
    );
  }
}
