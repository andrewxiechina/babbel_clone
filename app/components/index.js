import React from 'react';
import {
  Button,
  ScrollView,
  Text,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Tabs from './Tabs'
const Routes = {
  Home: {
    screen: Tabs
  }
};

const AppNavigator = StackNavigator({
  ...Routes,
  Home: {
    screen: Tabs,
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
});

export default () => <AppNavigator />;
