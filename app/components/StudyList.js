import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ListView,
} from 'react-native';
import Theme from './Theme';
import HeaderWithTitle from './HeaderWithTitle';
import ListWithSection from './ListWithSection';

export default class StudyList extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
  render() {
    return (
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            <HeaderWithTitle />
          </View>
          <View style={{flex: 4}}>
            <ListWithSection />
          </View>
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
    fontSize: 28,
    fontWeight: 'bold'
  },
  headerTextSmall: {
    fontSize: 18,
    color: Theme.mutedColor,
  },
  });
