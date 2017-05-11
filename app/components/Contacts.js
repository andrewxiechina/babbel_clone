import React from 'react';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image,
  ListView,
} from 'react-native';
import style from './style';

const image1 = require('../img/p1.png');
const image2 = require('../img/p2.png');
const image3 = require('../img/p3.jpg');
const image4 = require('../img/p4.png');
const image5 = require('../img/p5.png');
const image6 = require('../img/p6.jpg');

const data = [{
  "id": 1,
  "first_name": "G Eazy",
  "message": "I just need to be alone",
  "image": image1
}, {
  "id": 2,
  "first_name": "Eminem",
  "message": "Fuck off",
  "image": image2
}, {
  "id": 3,
  "first_name": "Kyle",
  "message": "Lame NI**As hide your girls",
  "image": image3
}, {
  "id": 4,
  "first_name": "Devon Baldwin",
  "message": "Where the Avacados at tho?",
  "image": image4
},{
  "id": 5,
  "first_name": "G Eazy",
  "message": "I just need to be alone",
  "image": image5
},
{
  "id": 1,
  "first_name": "G Eazy",
  "message": "I just need to be alone",
  "image": image1
}, {
  "id": 2,
  "first_name": "Eminem",
  "message": "Fuck off",
  "image": image2
}, {
  "id": 3,
  "first_name": "Kyle",
  "message": "Lame NI**As hide your girls",
  "image": image3
}, {
  "id": 4,
  "first_name": "Devon Baldwin",
  "message": "Where the Avacados at tho?",
  "image": image4
},{
  "id": 5,
  "first_name": "G Eazy",
  "message": "I just need to be alone",
  "image": image5
}]

export default class App extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: ds.cloneWithRows(data),
    };

  }
  renderItem(data) {
    return (
      <TouchableOpacity onPress={() => {this.props.navigation.navigate('Chat')}} style={[style.row, {padding: 10}]}>
        <View>
          <Image source={data.image} style={[{width: 60, height: 60, marginRight: 15}]}/>
        </View>
        <View>
          <View><Text style={[style.h5, style.bold]}>{data.first_name}</Text></View>
          <View><Text style={[style.fontSmall]}>2017-12-21 12:05 PM</Text></View>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      /* Setup status bar to be white and view to extend to whole screen */
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ListView
          dataSource={this.state.data}
          renderRow={(data) => this.renderItem(data)}
        />
      </View>
    );
  }
}
