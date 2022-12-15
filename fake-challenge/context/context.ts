import {createContext} from "react"
import { Product } from "../types/product"
import { User } from "../types/user"

export interface ContextProps{
    state:{
        user:User,
        products:Product[]
    }
    actions:{
        addCoin : (amount:number)=>Promise<void>
    }
}

export const ContextApi = createContext({} as ContextProps)  