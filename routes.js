import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase";
import { firebaseConfig } from "./config";
import Login from './Components/Login.js/login';
// import Login from "./Components/Login/Login";
// import Main from "./Components/Main";
// import Jobpost from "./Components/job/Job";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Components/Main';
if (!firebase.apps.length) {
  firebase.initializeApp({});
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  // 
});
