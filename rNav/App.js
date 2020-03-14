import 'react-native-gesture-handler';

import Details from './src/screens/stack/Details.js';

import Tab1 from './src/screens/tabs/Tab1';
import Tab2 from './src/screens/tabs/Tab2';
import Tab3 from './src/screens/tabs/Tab3';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {Component} from 'react';
import { AsyncStorage } from 'react-native'


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTabs = createMaterialBottomTabNavigator();


class App extends Component {
 
   createBottomTabs = () => 
  <BottomTabs.Navigator>
    <BottomTabs.Screen 
      name ="Calculator"
      component={Tab1}
      options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
          ),
        }}
     ></BottomTabs.Screen>
    <BottomTabs.Screen
    name ="Tab2"
    component={Tab2}
    options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'settings'} />
          ),
        }}></BottomTabs.Screen>
    <BottomTabs.Screen
    name ="Tab3"
    component={Tab3}
    options={{
          tabBarLabel: 'About',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'account-question'} />
          ),
        }}></BottomTabs.Screen>

  </BottomTabs.Navigator>


  

  render(){
    AsyncStorage.setItem('mass', 'kg');
    AsyncStorage.setItem('height', 'cm');
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BMI Calculator" children={this.createBottomTabs}/>
          <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
