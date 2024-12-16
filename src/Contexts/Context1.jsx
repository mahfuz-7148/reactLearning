import React, { createContext, useState } from 'react'



export const Context1 = createContext()

export const Context1Provider = ({children}) => {
    const [count, setCount] = useState('me')


  return (
   
    <Context1.Provider value={[count, setCount]}>
        {children}
    </Context1.Provider>
  )
}

export default Context1