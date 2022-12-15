import { useContext } from "react"
import {ContextApi,ContextProps} from "../context/context"

export const useCoins = ():[ContextProps["state"]["user"],ContextProps["actions"]["addCoin"]] =>{
    const {state:{user},actions:{addCoin}} = useContext(ContextApi)
    return [user,addCoin]
}