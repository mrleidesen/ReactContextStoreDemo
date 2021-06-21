import React, { useState, useContext } from 'react'

interface StoreProps {
  isLogin: boolean
  setIsLogin: (val: boolean) => void
  count: number
  setCount: (val: number) => void
}


const StoreContext = React.createContext<StoreProps>({} as StoreProps)


export const useStore = () => useContext(StoreContext)

export function Store({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState(false)
  const [count, setCount] = useState(0)

  return (
    <StoreContext.Provider value={{
      isLogin,
      setIsLogin,
      count,
      setCount
    }}>
      {children}
    </StoreContext.Provider>
  )
}
