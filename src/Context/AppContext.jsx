import React, { createContext, useContext } from 'react'
import { Dimensions } from 'react-native'


const ContextApp = createContext()

const AppProvider = ({children}) => {
    const {width,height} = Dimensions.get('window')

    const dimensions= {
        width:width,
        height:height,
    }

    const values = {
        dimensions
    }

  return (
    <ContextApp.Provider value={values}>
      {children}
    </ContextApp.Provider>
  )
}

export const useApp = ()=>{
    const {dimensions} = useContext(ContextApp)
    return {dimensions}
}


export default AppProvider
