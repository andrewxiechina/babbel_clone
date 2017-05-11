import React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');

var style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bgPrimary: {
    backgroundColor:'#075e54',
  },
  container: {
    flex: 1,
    width:null,
    height:null,
    justifyContent:'space-between',
    backgroundColor: '#fff',
  },
  input: {
    height: 60,
    padding: 10,
    backgroundColor: 'white',
    alignSelf:'flex-end',
    width: width,
    borderTopWidth:1,
    borderColor:'#f3f3f3',
  },
  h1: {
    fontSize: 30
  },
  h2: {
    fontSize: 26
  },
  h3: {
    fontSize: 22
  },
  h4: {
    fontSize: 19
  },
  h5: {
    fontSize: 16
  },
  fontNormal: {
    fontSize: 12
  },
  fontSmall: {
    fontSize: 10
  },
  bold: {
    fontWeight: 'bold'
  },
  white: {
    color: 'white'
  },
  black: {
    color: 'black'
  },
  tabTop: {
    alignItems:'center',
    paddingTop:15,
    justifyContent:'space-between',
    flexDirection: 'row'
  },
  userIcon: {
    height:50,
    width:50,
    margin:5,
    borderRadius:20,
    backgroundColor:'#f8f8f8'
  },
});

export default style
