import * as React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";


import HomeScreen from "./screens/HomeScreen";
import BMICalculator from "./screens/BMICalculator";
import Tips from "./screens/Tips";

const Stack= createStackNavigator();

export default function App(){
 return(
   <NavigationContainer>
  <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown:false
  }}>
  <Stack.Screen name="Home" component={HomeScreen}/>
  <Stack.Screen name="BMICalculator" component={BMICalculator}/>
  <Stack.Screen name="Tips" component={Tips}/>
  </Stack.Navigator>
   </NavigationContainer>
 )
}