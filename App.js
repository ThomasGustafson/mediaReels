import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Reel from './components/reels';
import data from "./data/data.json";
//const [reels,setReels] = useState(data);
// const[addFormData, setAddFormData] = useState({
// reelImage: '', 
//  reelId: '',
//  reelName: '',
//  reelYear: '',
//  reelStudio: '',
//  reelFormat: '',
//  reelNotes: ''

//  });






const handleAddFormChange = (event) => {

    event.preventDefault();
  
    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value;
  
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
  
    setAddFormData(newFormData);
  
  
  };
  
  
  const handelAddFormSubmit = (event) => {
  
  
    event.preventDefault();
  
    const newReel = {
  
      reelImage: addFormData.reelImage,
      reelId: addFormData.reelId,
      reelName: addFormData.reelName,
      reelYear: addFormData.reelYear,
      reelStudio: addFormData.reelStudio,
      reelFormat: addFormData.reelFormat,
      reelNotes: addFormData.reelNotes,
  
  
  
  
    }
  
    const newReels = [...reels, newReel];
    setReels(newReels);
  
  
  
  };

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

<Reel name = {'images/hidden figures.jpg'} text = {'Hidden figgures'} date = {'2016'} studio = {'fox searchlight pictures'} format ={'DVD'} other={'history'}/>

<Reel name = {'images/Water for Elephants.jpg'} text = {'Water for Elephants '} date ={'2014'} studio = {'sony'} format = {'DVD'} notes={'rom com'}/>





</View>


<View style ={styles.externalReelModificationControlls}>

<form>














{/* will only be able to view reel id not edit */}
<label id='reelIdLabel'>Reel Id</label>
<input
type= "number"
name='reelId'
//</form>onChange={}

/>












<label id='reelNameLabel'>Reel Name</label>

<input 
type= "text"
name='reelName'



/>



<label id='reelYearLabel'>Reel Year</label>
<input

type="text"
name='reelYear'


/>

<label id='reelStudioLabel'>Reel Label</label>
<input 

type='text'
name='reelStudio'

/>
<label id='reelFormatLabel'>Reel Format</label>
<input
type='text'
name='reelFormat'

/>

<label id='reelNotesLabel'> Reel Notes</label>
<input
type='text'
name='reelNotes'



/>



</form>













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


  // purple//
reelsWrapper: {

width: 1800,
height: 150,
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


// green//


  
  
  
// blue//



myReelsContainer:{


  width: 1500,
  height: 1100,
  marginTop: 10,
  marginLeft: 200,
  backgroundColor:'#1892D8',
  borderRadius: 90,




},


reelsBackground:{

width: 1650,
height: 1600,
marginTop: 140 ,
marginLeft: 150,


backgroundColor:'#35D818'


},








externalReelModificationControlls:{

  width:1300,
  height:600,
  marginTop: 55,
  marginLeft: 250,
  backgroundColor:'#D89818'


},

 
  
  
  
  
  


}
)
