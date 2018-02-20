import React, { Component } from 'react';
import { connect } from 'react-redux'



import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Fixture extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-football" size={29} style={{color: tintColor}} />,
    title: 'Fixture'
  };


  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}><Icon style={styles.iconStyle} name="ios-football" size={100} />
          </Text>
        </View>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Tabla
          </Text>
        </View>
      </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  iconStyle:{
    margin:10,
    color:"#FFF",
  },
  facebookButtonText:{
    color: '#FFF',
    textAlign: "center",
    fontWeight: 'bold',
  },
  facebookButtonContainer:{
    backgroundColor:"#3b5998",
    // textAlign: "center",
    borderRadius: 5,
    paddingVertical: 15,
    alignItems:'center'
  },
  imgContainer:{
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: 'red'
  },
  imagePng: {
    height: 80,
    width: 70,
  },
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  formContainer:{
    padding: 40,
    flex:0.35,
    // backgroundColor: '#2980b9',
  },
  logoContainer: {
    flex: 0.3,
    alignItems: 'center',
    // backgroundColor:'red',
    // flexGrow: 1,

    justifyContent: 'center'
  },
  buttonSignInContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 15,
  },
  buttonLogInContainer: {
    paddingVertical: 15,
    backgroundColor: '#3498db',
  },
  buttonSignInText:{
    color:'#3498db',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',

  },
  buttonLogInText:{
    color:'#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    width: 180,
    textAlign: 'center',
    opacity: 0.9
  }
});
