import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import colors from '../App/colors'
const Alert = ({children}) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{children}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        padding: 10,
        borderRadius:10,
        width: '80%'
    },
    text:{
        color:'#420404',
        textAlign:'center'
    }
})

export default Alert
