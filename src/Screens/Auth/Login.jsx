import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from "react-native";

import colors from "../../App/colors";
import { Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from '@expo/vector-icons'
import { useLogin } from "../../Context/LoginProvider";
import Alert from "../../Components/Alert";

const { width } = Dimensions.get("window");

function Login({ navigation }) {
  

  const { LogIn, setearLogin, userData } = useLogin();
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState({active:false,message:'error'})
  const [form, setForm] = useState({
    username_user: "",
    password_user: "",
  });

  const sendLogin = async () => {
    setLoading(true)
    let res = await LogIn(form);
    if (res.response) {
      setForm({username_user: "",password_user: ""})
      let u = res.results[0];
      setearLogin({
        username_user: u.username_user,
        id: u.id_user,
        email: u.email_user,
        name: u.name_user,
        token_user: u.token_user,
        login: true,
      });
      
      navigation.navigate("LoggedInScreen");
      setError({active:false,message:null})
    }
    else{
      console.log(res)
      setError({active:true,message:res.message})
    }
    setLoading(false)
  };

  const verificar = async () => {
    if (userData.login) {
      navigation.navigate("LoggedInScreen");
    }
  };

  useEffect(() => {
    const ca = new AbortController();
    let isActive = true;
    if (isActive) {
      verificar();
    }
    return () => {
      isActive = false;
      ca.abort();
    };
  }, [verificar]);

  return (<>
  <StatusBar style="dark" />
    <View style={styles.container}>
      <View style={styles.fondo}>
        
        <AntDesign name="user" size={110} color={colors.primary} />
        <Text style={styles.h6}>Usa tus credenciales para ingresar</Text>
      </View>
      <View style={styles.form}>
        {error.active && <Alert>{error.message}</Alert>}
        <View style={styles.view_inputs}>
          <TextInput
            placeholder="username" value={form.username_user}
            onChangeText={(e) => setForm({ ...form, username_user: e })}
            style={styles.input_text}
          />
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            autoCapitalize="none" value={form.password_user}
            onChangeText={(e) => setForm({ ...form, password_user: e })}
            style={styles.input_text}
          />
          {
            loading ? 
          
          <ActivityIndicator color={colors.primary} size={50} style={{ marginTop:20 }} />
          :

          <TouchableOpacity style={styles.button} onPress={sendLogin}>
            <Text style={styles.text_button}>
              LOGIN         
            </Text>
          </TouchableOpacity>
          }
        </View>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
  text_button: {
    color: "#ffffff",
  },
  fondo: {
    flex: 1,
    width: width,
    marginTop:25,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    width: width,
    padding: 10,
    marginTop:1,
    margin: 15,
  },
  container: {
    backgroundColor: "#f1f1f1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    fontSize: 36,
    color: "#34434d",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  h6: {
    fontSize: 14,
    fontWeight: "300",
  },
  view_inputs: {
    padding: 10,
    width: "100%",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  input_text: {
    padding: 15,
    paddingStart: 25,
    fontSize: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    margin: 12,
    color:colors.primary,
    backgroundColor: "#fff",
  },
});

export default Login;
