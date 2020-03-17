import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'stretch'
  },
  centerDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    marginTop: 30,
    alignSelf: 'center'
  },
  btn: {
    width:'100%',
    marginTop: 10,
    backgroundColor: 'black',
    color: 'black'
  },
  inputTitle:{
    color: 'grey',
    fontSize: 12,
    paddingTop:20,
    paddingBottom:5,
    paddingHorizontal:10,
    alignSelf:'flex-start'
  },
  input:{
    width:'100%',
    marginBottom:10
  },
  paragraph:{
    margin: 20,
    textAlign: 'center'
  },
  picker:{
    margin:30,
    fontSize:30,
    textAlign: 'center'
  },
  text:{
    margin:10,
    fontSize:20,
    textAlign: 'center'
  }
});