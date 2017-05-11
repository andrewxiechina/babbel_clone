import React from 'react';
import {
  Button,
  ScrollView,
  Text,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Tabs from './Tabs';
import Chat from './Chat';

const Routes = {
  Chat: {
    screen: Chat,
  },
  Home: {
    screen: Tabs,
  }
};

const AppNavigator = StackNavigator(Routes, {
  initialRouteName: 'Chat',
  headerMode: 'none',
});

export default () => <AppNavigator />;
