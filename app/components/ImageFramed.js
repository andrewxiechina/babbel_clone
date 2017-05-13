import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Triangle from 'react-native-triangle';

export default class ImageFramed extends React.Component {
  render() {
    return (
        <TouchableOpacity>
          <Image source={typeof this.props.img === "string" ? {url:this.props.img} : this.props.img }
                  style={[styles.img]} />
          <View style={{left: 55}}>
            <Triangle
                width={15}
                height={10}
                color={'#ccc'}
                direction={'up-right'}
              />
          </View>
        </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  img: {
      width: 150,
      height: 150,
      borderWidth: 10,
      borderColor: '#ccc'}
  });
