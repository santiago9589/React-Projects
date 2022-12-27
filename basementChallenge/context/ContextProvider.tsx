import React, { useState } from 'react'
import { useCart } from '../hooks/cart.hooks'
import { Product } from '../product/types'
import { ContextApp, contextProps } from './contextApp'

interface props{
  children:React.ReactNode
}


const ContextProvider = ({children}:props) => {

  const [cart,setCart,handleAdd,handleEditSize,handleEditQuantity] = useCart()

  const contextValues:contextProps ={
    state:{
      cart:cart
    },
    actions:{
      handleEditSize,
      handleEditQuantity,
      handleAdd,
      setCart
    }
  }

  return (
    <ContextApp.Provider value={contextValues}>
      {children}
    </ContextApp.Provider>
  )
}

export default ContextProvider