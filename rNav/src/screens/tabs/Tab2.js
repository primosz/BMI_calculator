import React, {Component} from 'react';
import { View, Text, Picker } from 'react-native';
import {AsyncStorage } from 'react-native'

import { styles } from '../../styles/styles.js'

export default class Tab1 extends Component {
  state={
    system: 'metric'
  }

  onChange = (itemValue, itemIndex) => {
    this.setState({system: itemValue});
    if(itemValue=='metric'){
      AsyncStorage.setItem('mass', 'kg');
      AsyncStorage.setItem('height', 'cm');
    }
    else{
      AsyncStorage.setItem('mass', 'lbs');
      AsyncStorage.setItem('height', 'in');
    }
  }
           

  render(){
    return(
        <View style={styles.center}>
          <Text style={styles.picker}>Choose system</Text>
          <Picker
           style={styles.picker}
           selectedValue={this.state.system}
           onValueChange={(itemValue, itemIndex) => this.onChange(itemValue, itemIndex)}>
            <Picker.Item label="Metric" value="metric" />
            <Picker.Item label="Imperial" value="imperial" />
          </Picker>
        </View>
    );
  }
}