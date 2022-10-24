import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useApp } from '../../Context/AppContext';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login() {

 const {dimensions} =  useApp()

 const styles = StyleSheet.create({
    button:{
        alignItems: "center",
        backgroundColor: "#696969",
        padding: 15,
        margin: 20,
        borderRadius:20,
    },
    text_button:{
        color:'#fff'
    }, 
    fondo:{
        backgroundColor:'#d4d4d4',
        flex:1,
        width: dimensions.width,
        padding: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    form:{
        flex:3,
        justifyContent:'flex-start',
        alignItems:'center',
        width: dimensions.width,
        padding: 10,
        margin: 15,
    },
    container:{
        backgroundColor:"#f1f1f1",
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    h1:{
        fontSize:36,
        color:'#34434d',
        fontWeight:'bold',
        textTransform:'uppercase'
    },
    h6:{
        fontSize:16,
        fontWeight:'100'
    },
    view_inputs:{
        padding: 10,
        width: '100%',
        marginTop: 20,
        marginLeft:10,
        marginRight:10
    },
    input_text:{
        padding: 15,
        paddingStart:25,
        fontSize:16,
        borderRadius:20,
        borderWidth:1,
        borderColor:"#f1f1f1",
        margin: 12,
        backgroundColor:"#fff"
    }
})


  return (
    <View style={styles.container}>
        <View style={styles.fondo}>
            <Text style={styles.h1}>Login</Text>
            <Text style={styles.h6}>Usa tus credenciales para ingresar</Text>
            <Ionicons name="fast-food-outline" size={32} color="green" />
        </View>
      <View style={styles.form}>
      
      <View style={styles.view_inputs}>
        <TextInput placeholder='email' style={styles.input_text} />
        <TextInput placeholder='password' style={styles.input_text} />
        <TouchableOpacity
        style={styles.button}
        onPress={()=>{}}
      >
        <Text style={styles.text_button}>LOGIN</Text>
      </TouchableOpacity>
      </View>
      </View>
     </View>
  );
}
