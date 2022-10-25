import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Button from '../../Components/Button';
import { useLogin } from '../../Context/LoginProvider';

function Profile({navigation}) {

    const {setearLogin} = useLogin()


    const logout = ()=>{
        let user = {
            username:'',
            id:'',
            email:'',
            name:'',
            token_user:'',
            login:false
          }
          setearLogin(user)
          navigation.navigate('Login')
    }


  return (
    <View style={style.container}>
      <Text>PROFILE</Text>
      <Button onPress={logout}>Logout</Button>
     </View>
  );
}

const style = StyleSheet.create({
    container:{
        flex:1,justifyContent:'center',alignItems:'center'
    }
})

export default Profile;
