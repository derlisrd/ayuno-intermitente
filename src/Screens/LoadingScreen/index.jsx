import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LoadingScreen() {
        const style = StyleSheet.create({
            container:{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:"#1d1e36"
            },
            title:{
                fontSize:28,
                textAlign:'center',
                color:'white',
                
            }
        })
  return (
    <View style={style.container}>
      <Text style={style.title}>AYUNO</Text>
     </View>
  );
}
