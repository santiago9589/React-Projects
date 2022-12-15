import { useContext } from "react"
import {ContextApi,ContextProps} from "../context/context"


export const useUser = ():ContextProps["state"]["user"] =>{
    const {state:{user}} = useContext(ContextApi)
    return user
}