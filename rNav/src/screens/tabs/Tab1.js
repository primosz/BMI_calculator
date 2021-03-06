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

   calculate = (mass, height, system) =>{
    let resultBmi=0;
    if(system=='metric'){
      let heightFloatM = height/100;
              let massFloatKg = mass;
              resultBmi = massFloatKg / (heightFloatM*heightFloatM);
              this.handleColor(resultBmi);
              this.setState({bmi: resultBmi.toFixed(2)})
    }
    else if(system=='imperial'){
      let heightFloatIn = height;
              let massFloatLbs = mass;
              resultBmi = 703*massFloatLbs / (heightFloatIn*heightFloatIn);
              this.handleColor(resultBmi);
              this.setState({bmi: resultBmi.toFixed(2)})
    }    
   }
   
   handleColor = (resultBmi) =>{
     
     if(resultBmi<18.5) this.setState({bmiColor: 'grey'})
     if(resultBmi>=18.5 && resultBmi<23) this.setState({bmiColor: 'green'})
     if(resultBmi>=23 && resultBmi<25) this.setState({bmiColor: '#eff40f'})
     if(resultBmi>=25 && resultBmi<30) this.setState({bmiColor: '#ff6666'})
     if(resultBmi>30) this.setState({bmiColor: '#cc0000'})
   }

   count = () => {
     Keyboard.dismiss();     
     if (this.state.heightInput == '' || this.state.massInput == '') alert ('Please provide correct values!')
     else{ 
       if(this.state.mass=='kg')
            {
              this.calculate(parseFloat(this.state.massInput), parseFloat(this.state.heightInput), 'metric')
            }
       else if(this.state.mass=='lbs')
            {              
              this.calculate(parseFloat(this.state.massInput), parseFloat(this.state.heightInput), 'imperial')
            }                         
     }     
   }

   handleBmiClick = () => {
     if(this.state.bmi!='') this.props.navigation.navigate('Details', { bmi: this.state.bmi, color: this.state.bmiColor })
   } 
  render() {
       

    return (
    <View style = {styles.center}>
      <Text style={styles.inputTitle}>Mass [{this.state.mass}]</Text>

      <TextInput
        value={this.state.massInput}
        style={styles.input}
        onChangeText={this.onChangeMassInput}
        keyboardType='numeric'
        accessibilityLabel = 'massInput'/>

      <Text style={styles.inputTitle}>Height [{this.state.height}]</Text>

      <TextInput
        value={this.state.heightInput}
        style={styles.input}
        onChangeText={this.onChangeHeightInput}
        keyboardType='numeric'
        accessibilityLabel = 'heightInput'/>
        
        <TouchableOpacity
         style={styles.btn}
         onPress={this.count}
         accessibilityLabel = 'countBtn'
         >
          <Button icon='chart-line' mode='contained'>Count</Button>
        </TouchableOpacity>
        
        <TouchableOpacity
         onPress={this.handleBmiClick}
         >
          <Text style={{
              fontSize: 50,
              marginTop: 60,
              alignSelf: 'center',
              color: this.state.bmiColor
          }}
              accessibilityLabel = 'resultText'
              >{this.state.bmi}</Text> 
        </TouchableOpacity>      
        
    </View>
    );
  }
}


export default Tab1;