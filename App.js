import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     

    <View style={styles.reelsWrapper}>

      <Text style={styles.appTitle}>

      Media Reels

      </Text>

     <View style ={styles.reelsBackground}>







    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

reelsWrapper: {

width: 1400,
height: 200,
backgroundColor:"#8819E5"


},


appTitle:{

textAlign:'center',


},








});
