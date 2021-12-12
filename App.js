import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Reel from './components/reels';









export default function App() {
  return (
    <View style={styles.container}>
     

    <View style={styles.reelsWrapper}>

     







<Reel></Reel>





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


  // purple//



appTitle:{
marginTop: -250,
textAlign:'center',
fontWeight:'bold',
fontSize:24,


},







  








// green//


  
  
  
// blue//




 
  
  
  
  
  


}
)
