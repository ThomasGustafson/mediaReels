import React from "react";
import{View, Text , StyleSheet,Image, TouchableOpacity, ShadowPropTypesIOS} from 'react-native';
const Reel = (props)=>{


    return(
        <View style ={styles.Reel}>





<View style={styles.reelLeft}>
           <View />

           <Image source={require('../assets/' + props.name)} style ={styles.reelImage}/> 

           </View>






<Text style = {styles.reelName}>{props.text}</Text>

        </View>










    );










}

const styles = StyleSheet.create({























})

export default Reel;