import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
interface CustomButtonProps{
    onPress:()=>void;
    title:String,
    textStyles?:String,
    containerStyles?: String;
}
const AnswerButton=({ onPress, title, textStyles="", containerStyles=""}:
    CustomButtonProps)=> {
    return (
        <TouchableOpacity activeOpacity={0.7}
        style={styles.iconButton}
        // className="`${containerStyles}`"
        onPress={onPress}
        
        >
            <Text style={styles.text}>{title}</Text>
          
        </TouchableOpacity>
    )
}

export default AnswerButton

const styles=StyleSheet.create({
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#32CD32', // Grass green
        padding: 10,
        borderRadius: 15,
        marginVertical: 10,
        width: '70%',
        justifyContent: 'center',
      },
    to:{
        backgroundColor:'white',
        borderRadius:15,
        minHeight:22,
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
        marginHorizontal:40,
    

    },
    text:{
        textAlign:'center',
        color:'black',
        fontWeight:'bold',
        fontSize:16,
        paddingHorizontal:60
        
      

    }
})