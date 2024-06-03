import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class BMICalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      weight: '',
    };
  }

  calculateBMI=()=>{ 
    console.log("Inside calculate bmi function"); 
    let height,weight; 
    height = this.state.height; 
    weight= this.state.weight; 
    convertedHeight = height * 0.01 
    bmi = weight/(convertedHeight*convertedHeight) 
    console.log(convertedHeight);
    console.log(bmi) ;
    }



  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView} />
        <View style={styles.imageView}>
          <Image source={require('../assets/BMILogo.png')} style={styles.logo} />
        </View>

        <View>
          <TextInput
            style={styles.inputFont}
            onChangeText={(height) => this.setState({ height })}
            placeholder={'Height'}
            keyboardType={'numeric'}
            placeholderTextColor="red"
          />
          <TextInput
            style={styles.inputFont}
            onChangeText={(weight) => this.setState({ weight })}
            placeholder={'Weight'}
            keyboardType={'numeric'}
            placeholderTextColor="red"
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.calculateBMI}>
            <Text style={styles.buttonText}>Calculate your BMI</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(25),
  },
  container: {
    flex:1,
    alignItems:"center",
    justifyContent: 'center',
    backgroundColor: 'cyan',
  },
  submitButton:{
    marginTop:RFValue(50),
    width: RFValue(300),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(15),
    backgroundColor: "red"
  },
  inputFont:{
    width:RFValue(150),
     height: RFValue(40),
    borderColor: "black",
    borderWidth:2,
    borderRadius: RFValue(10),
    marginTop:RFValue(20),
    paddingLeft: RFValue(20),
    color: "black",
  },
  buttonText:{
     textAlign: 'center',
    borderColor: 'red',
    borderWidth: RFValue(4),
  },
  imageView:{
    width: RFValue(50),
    height: RFValue(50),
    resizeMode: "contain"
  },
  logo: {
   width:RFValue(100),
   height:RFValue(100),
marginTop:RFValue(-150),
   marginLeft:RFValue(-25),

  }
    
});
