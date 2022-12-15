import { useContext } from "react"
import {ContextApi,ContextProps} from "../context/context"


export const useProduct = ():ContextProps["state"]["products"] =>{
    const {state:{products}} = useContext(ContextApi)

    return products
}