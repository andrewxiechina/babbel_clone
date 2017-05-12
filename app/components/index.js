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
import MyWeb from './MyWeb';

const Routes = {
  Chat: {
    screen: Chat,
  },
  Home: {
    screen: Tabs,
  },
  MyWeb: {
    screen: MyWeb,
  }
};

const AppNavigator = StackNavigator(Routes, {
  initialRouteName: 'MyWeb',
  headerMode: 'none',
});

export default () => <AppNavigator />;
