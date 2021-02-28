import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function Main() {

    return (
        <View>
            <Text>MAIN PAGE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    // 
});
