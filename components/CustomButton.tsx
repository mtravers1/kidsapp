import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
interface CustomButtonProps{
    onPress:()=>void;
    title:String,
    textStyles?:String,
    containerStyles?: String;
}
const Custombutton=({ onPress, title, textStyles="", containerStyles=""}:
    CustomButtonProps)=> {
    return (
        <TouchableOpacity activeOpacity={0.7}
        style={styles.to}
        // className="`${containerStyles}`"
        onPress={onPress}
        
        >
            <Text style={styles.text}>{title}</Text>
          
        </TouchableOpacity>
    )
}

export default Custombutton

const styles=StyleSheet.create({
    to:{
        backgroundColor:'white',
        borderRadius:15,
        minHeight:62,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:45,
        marginHorizontal:40,
    

    },
    text:{
        textAlign:'center',
        color:'black',
        fontWeight:'bold',
        fontSize:25,
        paddingHorizontal:60
        
      

    }
})