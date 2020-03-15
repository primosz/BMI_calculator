import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/styles.js'

class Details extends Component{
  render(){
    let bmi = this.props.route.params.bmi;
    let bmiCol = this.props.route.params.color;
    let text = '';
    if (bmi<18.5) text = 'You are underweighted. You should start eating more.';
    else if (bmi<23.5) text = "You are in optimal range. Your bmi is normal and you are healthy.";
    else if (bmi<25) text = 'Your bmi indicates that you are overweight - at risk. You should start eating healthier food.';
    else if (bmi<30) text = 'Your bmi indicates that you are overweight - moderately Obese. You should get help from dietetic and personal trainer.';
    else text = 'Your bmi indicates that you are overweight - Severely Obese. You should get help from a doctor or there will be consequences with such lifestyle.';

    return(
      <View style={styles.centerDetails}>
        <Text style={{
          color: bmiCol,
          fontSize: 50,
          width: '100%',
          textAlign: 'center'
        }}
        > Your BMI is: {bmi}</Text>
        <Text style={styles.paragraph}>{text}</Text>
      </View>
    )
  }
  
}
export default Details;