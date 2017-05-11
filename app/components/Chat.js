import React, {Component} from 'react';
import {
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from './style';

const bg = require('../img/background.jpg');


export default class Chat extends Component {
  render(){
    return (
    <Image source={bg} style={[style.container]}>
        <View style={[style.bgPrimary, style.tabTop]}>
          <Text style={[style.h3, style.white, {marginLeft: 15}]}>WhatsApp</Text>
          <View style={[style.row, {marginRight: 10}]}>
            <Ionicons name="ios-search" color='#fff' size={23} style={{ padding:10 }} />
            <Ionicons name="ios-chatbubbles-outline" color='#fff' size={23} style={{ padding:10 }} />
            <Ionicons name="ios-more" color='#fff' size={23} style={{ padding:10 }} />
          </View>
        </View>

        <View>
          <View style={{ flexDirection:'row', alignSelf:'flex-end', alignItems:'flex-end', margin:5 }}>
            <View style={{ width:220, borderRadius:10, backgroundColor:'#00b499', padding:10 }}>
              <Text style={{ fontSize:15, color:'#fff', fontWeight:'600' }}>锅锅爱生米！</Text>
            </View>
            <Image
              source ={require('../img/p1.png')}
              resizeMode="contain"
              style={[style.userIcon]}
            />
          </View>
          <View style={{ flexDirection:'row', alignSelf:'flex-end', alignItems:'flex-end', margin:5 }}>
            <View style={{ width:220, borderRadius:10, backgroundColor:'#00b499', padding:10 }}>
              <Text style={{ fontSize:15, color:'#fff', fontWeight:'600' }}>生米是不是有每天思念着锅锅呀？</Text>
            </View>
            <Image
              source ={require('../img/p1.png')}
              resizeMode="contain"
              style={[style.userIcon]}
            />
          </View>

          <View style={[style.input]}>
            <TextInput
              style={{flex: 1}}
              onChangeText={(text) => this.setState({text})}
              placeholder="Enter Your message here"
              />
          </View>
        </View>
  </Image>
    )
  }
}
