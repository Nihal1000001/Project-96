import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Tips extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <SafeAreaView style={styles.safeAreaView} />

        <Text style={styles.header}>What is BMI?</Text>
        <Text style={styles.text}>Body mass index is a value derived from the mass and height of a
          person. The BMI is defined as the body mass divided by the square of
          the body height, and is expressed in units of kg/m², resulting from
          mass in kilograms and height in metres. </Text>

          <Text style={styles.text}>You can use Body Mass Index (BMI) to determine whether you’re at a healthy weight or overweight and, therefore, at a greater risk of developing weight-related health problems. BMI strongly correlates to the total fat on your body, and best of all, it’s easy to determine and is applicable to all adults.</Text>
         
         
          
         <Text style={styles.header}>Tips to lose weight if you are above average BMI:</Text>

         <Text style={styles.text}>
         {'1.	Eat varied, colorful, nutritionally dense foods.\n 2.	Keep a food and weight diary.'}
         
         </Text>

         <Text style={styles.header}>Tips to gain weight if you are below average BMI:</Text>

          <Text style={styles.text}>
          1.	Eat three to five meals a day. Eating at least three meals a day can make it easier                to increase calorie intake.
          2.	Undertake Weight training. 
          3.	Eat enough protein.
          4.	Eat meals with fibrous carbohydrates and healthful fats. 
          5.	Drink high-calorie smoothies or shakes. 
          6.	Seek help where needed.
           </Text>

             <View style={styles.imageView}>
          <Image source={require('../assets/BMIChart.gif')} style={styles.image} />
          </View>

  </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'cyan',
  },
  safeAreaView: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(25),
  },
  imageView:{
    alignItems:"center",
    width: RFValue(20),
    height: RFValue(20),
    resizeMode:"contain",
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  text:{
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  image:{
    justifyContent:'center',
    marginLeft:RFValue(250),
    width:RFValue(400),
    height:RFValue(200)
  }
});
