import React, { createContext, useContext, useState,useEffect,useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const ContextLogin = createContext()

const LoginProvider = ({children}) => {


    const [userData,setUserData] = useState({})
  
    const getData = useCallback(   async () => {
      try {
        const value = await AsyncStorage.getItem('@userData')
        if(value !== null) {
            let user = {
              email:null,
              id:null,
              name:null,
              token_user:null
            }
            setUserData(user)
        }
      } catch(e) {
        // error reading value
      }
    },[]);

    const values = {
        userData
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
    const {userData} = useContext(ContextLogin)
    return {userData}
}


export default LoginProvider
