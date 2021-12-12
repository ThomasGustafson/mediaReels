import React, { useState } from "react";
import{View, Text , StyleSheet,Image, TouchableOpacity, ShadowPropTypesIOS} from 'react-native';


const Reel = (props)=>{














    return(
        <View style ={styles.reel}>





<View style={styles.reelLeft}>
           <View />

           <View style = {styles.reelImageContainer}>
           
           <Image source={require('../assets/' + props.name)} style ={styles.reelImage}/> 
           </View>
           </View>




<View>


 <Text style = {styles.reelName}>{props.text}</Text>
 <Text style= {styles.reelDate}>{props.date}</Text>
 <Text style = {styles.reelStudio}>{props.studio}</Text>
 <Text style = {styles.reelFormat}>{props.format}</Text>
 <Text style = {styles.reelNotes}>{props.notes}</Text>



</View>


    













    



</View>


    


    )

}


const styles = StyleSheet.create({



reel:{

backgroundColor: '#FFF',
padding: 20,
marginTop:50,
borderRadius: 40,
flexDirection: 'row',
alignItems:'center',









},


reelLeft:{
    
    flexDirection: 'row',
    alignItems:'center',
    flexWrap: 'wrap',
    







},


reelImageContainer:{

width: 160,
height:160,



},

reelImage:{

    


    height: 150,
    width: 150,
    resizeMode: 'stretch',








},

reelName:{


    marginLeft: 50,
    






},

reelDate:{


marginLeft: 300,
marginTop: -20,




},

reelStudio:{



marginLeft: 510,
marginTop: -20,



},

reelFormat:{

marginLeft: 800,
marginTop: -20,




},

reelNotes:{

marginLeft: 1000,
marginTop: -20,





},



















})

export default Reel;