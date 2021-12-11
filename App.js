import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Reel from './components/reels';


export default function App() {
  return (
    <View style={styles.container}>
     

    <View style={styles.reelsWrapper}>

      <Text style={styles.appTitle}>

      Media Reels

      </Text>

     <View style ={styles.reelsBackground}>

<Text style={styles.myReelsHeader}>My Reels</Text>
<View style={styles.searchBar}>





</View>

{/* this is where the reels are going to go */}

<View style={styles.myReelsContainer}>

<Reel name = {'images/hidden figures.jpg'} text = {'Hidden figgures'} date = {'2016'}/>





</View>


<View style ={styles.externalReelModificationControlls}>







</View>








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

width: 1800,
height: 200,
backgroundColor:"#8819E5",
marginBottom: 700,


},


appTitle:{
marginTop: 60,
textAlign:'center',
fontWeight:'bold',
fontSize:24,


},

searchBar:{

width:600,
height:40,
marginTop: 40,
marginLeft: 440,
backgroundColor:'#EB927A'





},




myReelsHeader:{

  marginTop: 50,
  textAlign:'center',
  fontWeight:'bold',
  fontSize:22,
  





},

reelsBackground:{

  width: 1500,
  height: 1000,
  marginTop: 140 ,
  marginLeft: 150,
  
  
  backgroundColor:'#35D818'
  
  
  },
  

myReelsContainer:{


  width: 1100,
  height: 500,
  marginTop: 10,
  marginLeft: 250,
  backgroundColor:'#1892D8'




},


reelsBackground:{

width: 1500,
height: 1000,
marginTop: 140 ,
marginLeft: 150,


backgroundColor:'#35D818'


},

externalReelModificationControlls:{

width:400,
height:100,
marginTop: 55,
marginLeft: 565,
backgroundColor:'#D89818'




},




});
