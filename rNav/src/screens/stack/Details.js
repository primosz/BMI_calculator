import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/styles.js'

class Details extends Component{
  render(){
    return(
      <View style={styles.center}>
        <Text style={styles.title}>{this.props.route.params.bmi}</Text>
      </View>
    )
  }
  
}
export default Details;