import React, { useEffect, useState } from 'react'
import { ContextApi, ContextProps } from './context'
import { User } from "../types/user"
import { api } from "../api/api"
import { Product } from '../types/product'


interface props {
    children: React.ReactNode
}


const ContextProvider = ({ children }: props) => {

    const [user, setUser] = useState<User>()
    const [status, setStatus] = useState<"RESOLVED"|"REJECT"|"PENDING">("PENDING")
    const [products,setProducts] = useState<Product[]>()

    

    useEffect(() => {
        api.users().then((res) => {
            setUser(res) 
        })
        api.products().then((res) => {
            setProducts(res)
            setStatus("RESOLVED")
        })
    }, [])

    const handleCoins = async(amount: number) => {
        if (!user) return
        return api.addCoins(amount).then((amount) => {
            
            setUser({ ...user, points: user?.points + amount })
            
        })
    }

    const handleBuy = async(product:Product)=>{
        if (!user) return
        api.buyProduct(product).then((res)=>{
            setUser({...user,points:user.points - product.cost}) 
            alert(res)
        })
    }

    

    if (!user || !products || !history || status === "PENDING" ) {
        return(
            <div>
                Cargando...
            </div>
        )
    }

    const state: ContextProps["state"] = {
        user: user,
        products:products,
    }

    const actions: ContextProps["actions"] = {
        addCoin: handleCoins,
        handleBuy
    }
   
    return (
        <ContextApi.Provider value={{ state, actions }}>
            {children}
        </ContextApi.Provider>
    )
}

export default ContextProvider