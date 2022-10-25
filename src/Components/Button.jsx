import React from 'react'
import {Text,StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({children, ...rest}) => {
  return (
    <TouchableOpacity style={style.button}  {...rest}>
        <Text style={style.button_text}>{
            children
        }</Text>
    </TouchableOpacity>
  )
}


const style = StyleSheet.create({
    container:{
        flex:1,justifyContent:'center',alignItems:'center'
    },
    button:{
        margin:18,
        padding:15,
        backgroundColor:'#6c0',
        borderRadius:10
    },
    button_text:{
        color:"white",
        fontWeight:'bold'
    }
})

export default Button
