import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ListView,
} from 'react-native';
import Theme from './Theme'

export default class MyComponent extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2','row 3', 'row 4','row 5', 'row 7']),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
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
    fontSize: Theme.h3,
    fontWeight: 'bold'
  },
  headerTextSmall: {
    fontSize: Theme.normal,
    color: Theme.mutedColor,
  },
  });
