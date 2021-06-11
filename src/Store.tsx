import React, { useState, useContext } from 'react'

interface StoreProps {
  isLogin: boolean
  count: number
}

interface StoreUpdateProps {
  setStateIsLogin: Function
  setStateCount: Function
}


const StoreContext = React.createContext<StoreProps>({} as StoreProps)
const StoreUpdateContext = React.createContext<StoreUpdateProps>({} as StoreUpdateProps)


export const useStore = () => useContext(StoreContext)
export const useStoreUpdate = () => useContext(StoreUpdateContext)

export function Store({ children }: { children: React.ReactNode }) {
  const [storeValue, setStoreValue] = useState({
    isLogin: false,
    count: 2,
  })

  const setStateCount = (val: number) => {
    setStoreValue(prev => ({
      ...prev,
      count: val
    }))
  }

  const setStateIsLogin = (val: boolean) => {
    setStoreValue(prev => ({
      ...prev,
      isLogin: val
    }))
  }

  return (
    <StoreContext.Provider value={storeValue}>
      <StoreUpdateContext.Provider value={{
        setStateCount,
        setStateIsLogin
      }}>
        {children}
      </StoreUpdateContext.Provider>
    </StoreContext.Provider>
  )
}
