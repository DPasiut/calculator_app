import React, {Component} from 'react';
import {View, Text} from 'react-native';

class TextView extends Component {
  render() {
    const {title, fontColor, size, boxHeight} = this.props;
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: boxHeight,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            fontSize: size,
            fontWeight: 'bold',
            margin: 10,
            color: 'black',
          }}>
          {title}
        </Text>
      </View>
    );
  }
}


export default TextView;
