import React from "react";
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



</View>


        </View>













    );










}

const styles = StyleSheet.create({



reel:{

backgroundColor: '#FFF',
padding: 20,
marginTop:50,
borderRadius: 60,
flexDirection: 'row',
alignItems:'center',
justifyContent: 'space-between',








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


    marginLeft: -800,






},






















})

export default Reel;