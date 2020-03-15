import React, { Component} from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles.js'
import {AsyncStorage, Keyboard } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Tab1 extends Component {
  state={
    mass:'',
    height:'',
    massInput: '',
    heightInput: '',
    bmi: '',
    bmiColor: 'black'
  }


  componentDidMount = () => {
    this.props.navigation.addListener('focus', () => {
      AsyncStorage.getItem('mass').then((value) =>
       this.setState({
      'mass': value
       }));
       AsyncStorage.getItem('height').then((value) => 
        this.setState({
        'height': value
       }));
    });  
    AsyncStorage.getItem('mass').then((value) =>
       this.setState({
      'mass': value
       }));
       AsyncStorage.getItem('height').then((value) => 
        this.setState({
        'height': value
       }));
    
  }  
 

  onChangeMassInput = (event) => {
    this.setState({
      massInput:event
    })
  }

   onChangeHeightInput = (event) => {
     this.setState({
       heightInput: event
     })
   }

   count = () => {
     Keyboard.dismiss();
     let resultBmi=0;
     if (this.state.heightInput == '' || this.state.massInput == '') alert ('Please provide correct values!')
     else{
       if(this.state.mass=='kg')
            {
              let heightFloatM = parseFloat(this.state.heightInput)/100;
              let massFloatKg = parseFloat(this.state.massInput);
              resultBmi = massFloatKg / (heightFloatM*heightFloatM);
              this.setState({bmi: resultBmi.toFixed(2)})
            }
       else if(this.state.mass=='lbs')
            {
              let heightFloatIn = parseFloat(this.state.heightInput);
              let massFloatLbs = parseFloat(this.state.massInput);
              resultBmi = 703*massFloatLbs / (heightFloatIn*heightFloatIn);
              this.setState({bmi: resultBmi.toFixed(2)})
            }
            if(resultBmi<18.5) this.setState({bmiColor: 'grey'})
            if(resultBmi>=18.5 && resultBmi<23) this.setState({bmiColor: 'green'})
            if(resultBmi>=23 && resultBmi<25) this.setState({bmiColor: '#eff40f'})
            if(resultBmi>=25 && resultBmi<30) this.setState({bmiColor: '#ff6666'})
            if(resultBmi>30) this.setState({bmiColor: '#cc0000'})      
       
     }
   }

  render() {
    
    

    return (
    <View style = {styles.center}>
      <Text style={styles.inputTitle}>Mass [{this.state.mass}]</Text>
      <TextInput
        value={this.state.massInput}
        style={styles.input}
        onChangeText={this.onChangeMassInput}
        keyboardType='numeric'/>
      <Text style={styles.inputTitle}>Height [{this.state.height}]</Text>
      <TextInput
        value={this.state.heightInput}
        style={styles.input}
        onChangeText={this.onChangeHeightInput}
        keyboardType='numeric'/>
        <TouchableOpacity style={styles.btn} onPress={this.count}>
          <Button icon='chart-line' mode='contained'>Count</Button>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', { bmi: this.state.bmi, color: this.state.bmiColor })}>
          <Text style={{
              fontSize: 50,
              marginTop: 60,
              alignSelf: 'center',
              color: this.state.bmiColor
          }}>{this.state.bmi}</Text> 
        </TouchableOpacity>      
        
    </View>
    );
  }
}


export default Tab1;