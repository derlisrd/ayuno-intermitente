import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//import { useApp } from '../../Context/AppContext';
import { Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLogin } from '../../Context/LoginProvider';


const {width} = Dimensions.get('window')

function Login({ navigation }) {

    //const {dimensions} =  useApp()
    const {LogIn,setearLogin} = useLogin()
    const [form,setForm] = useState({
        username_user:'',
        password_user:''
    })
    
    const sendLogin = async()=>{
        let res = await LogIn(form)

        if(res.response){
            let u = res.results[0]
            setearLogin({
                username_user:u.username_user,
                id:u.id_user,
                email:u.email_user,
                name:u.name_user,
                token_user:u.token_user,
                login:true
            })
            navigation.navigate('Home')
        }
    }


  return (
    <View style={styles.container}>
        <View style={styles.fondo}>
            <Text style={styles.h1}>Login</Text>
            <Text style={styles.h6}>Usa tus credenciales para ingresar</Text>
            <Ionicons name="fast-food-outline" size={32} color="green" />
        </View>
      <View style={styles.form}>
      
      <View style={styles.view_inputs}>
        <TextInput placeholder='username' onChangeText={e=> setForm({...form,username_user: e})} style={styles.input_text} />
        <TextInput placeholder='password' autoCapitalize = "none" onChangeText={e=> setForm({...form,password_user: e})} style={styles.input_text} />
        <TouchableOpacity
        style={styles.button}
        onPress={sendLogin}
      >
        <Text style={styles.text_button}>LOGIN</Text>
      </TouchableOpacity>
      </View>
      </View>
     </View>
  );
}




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
        width: width,
        padding: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    form:{
        flex:3,
        justifyContent:'flex-start',
        alignItems:'center',
        width: width,
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


export default Login;