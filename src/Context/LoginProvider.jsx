import React, { createContext, useContext } from 'react'

const ContextLogin = createContext()

const LoginProvider = ({children}) => {

    const userData = {
        id:1,
        name:"Derlis",
        email:'derlisruizdiaz@gmail.com'
    }

    const values = {
        userData
    }

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
