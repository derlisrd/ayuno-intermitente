import React, { createContext, useContext, useState,useEffect,useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { APICALLER } from '../Services/api';


const ContextLogin = createContext()

const LoginProvider = ({children}) => {


    const [userData,setUserData] = useState({})
  

    const LogIn = async(f)=>{
      let res = await APICALLER.login(f)
      return res;
    }


    const setearLogin = async(f)=>{
      setUserData(f)
      await AsyncStorage.setItem('userData',JSON.stringify(f))
    }


    const getData = useCallback(async () => {
      try {
        const value = await AsyncStorage.getItem('userData')
        if(value !== null) {
            let user = {
              username:'',
              id:'',
              email:'',
              name:'',
              token_user:'',
              login:false
            }
            setearLogin(user)
        }else{
          setearLogin(JSON.parse(value))
        }
      } catch(e) {
        // error reading value
      }
    },[]);

    const values = {
        userData,LogIn,setearLogin
    }

    useEffect(() => {
      const ca = new AbortController(); let isActive = true;
      if (isActive) {
        getData();
      }
      return () => {
        isActive = false;
        ca.abort();};
    }, [getData]);

  return (
    <ContextLogin.Provider value={values}>
      {children}
    </ContextLogin.Provider>
  )
}

export const useLogin = ()=>{
    const {userData,LogIn,setearLogin} = useContext(ContextLogin)
    return {userData,LogIn,setearLogin}
}


export default LoginProvider
