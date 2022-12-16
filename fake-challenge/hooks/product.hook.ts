import { useContext, useEffect, useMemo, useState } from "react"
import { api } from "../api/api"
import {ContextApi,ContextProps} from "../context/context"
import { Product } from "../types/product"


export const useProduct = ():[ContextProps["state"]["products"],ContextProps["actions"]["handleBuy"],Product[]] =>{
    const {state:{products},actions:{handleBuy}} = useContext(ContextApi)
    const [history,setHistory] = useState<Product[]>([])

    useMemo(()=>{
        api.getHistory().then((res)=>{
            setHistory(res)
        })
    },[handleBuy,products])


    return [products,handleBuy,history]
}