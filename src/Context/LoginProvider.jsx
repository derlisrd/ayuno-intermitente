import React, { createContext, useContext, useState,useEffect,useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { APICALLER } from '../Services/api';


const ContextLogin = createContext()

const LoginProvider = ({children}) => {


    const [userData,setUserData] = useState({})
    const [loading,setLoading] = useState(true)

    const LogIn = async(f)=>{
      let res = await APICALLER.login(f)
      return res;
    }

    console.log(userData)
    const setearLogin = async(f)=>{
      setUserData(f)
      console.log(f)
      await AsyncStorage.setItem('userData',JSON.stringify(f))
    }


    const getData = useCallback(async () => {
      setLoading(true)
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
          let parsed = JSON.parse(value)
          setearLogin(parsed)
          console.log(parsed.token_user)
        }
      } catch(e) {
        console.log(e)
      }
      setLoading(false)
    },[]);

    const values = {
        userData,LogIn,setearLogin,loading
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
    const {userData,LogIn,setearLogin,loading} = useContext(ContextLogin)
    return {userData,LogIn,setearLogin,loading}
}


export default LoginProvider
