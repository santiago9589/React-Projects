import { GET_DATA,GET_ERRORS,
    BACK_BUY,START_BUY,START_MODIFY_DATA,START_LOGOUT,FINISH_MODIFY_DATA,FILTER_PRODUCT, CLEAR_BUY, START_LOGIN, FAIL_LOGIN } from "./actiontype"


export const setData = (products) =>{
    return {
        type:GET_DATA,
        payload:products
    }
}

export const setError = (errors) =>{
    return {
        type:GET_ERRORS,
        payload:errors
    }
}

export const startModify = (product) =>{
    return {
        type:START_MODIFY_DATA,
        payload:product
    }
}

export const finishModify = () =>{
    return {
        type:FINISH_MODIFY_DATA,
    }
}

export const filterProduct = (name) =>{
    return {
        type:FILTER_PRODUCT,
        payload:name
    }
}

export const startBuy = (product) =>{
    return {
        type:START_BUY,
        payload:product
    }
}

export const backBuy = (id) =>{
    return {
        type:BACK_BUY,
        payload:id
    }
}

export const clearBuy = () =>{
    return {
        type:CLEAR_BUY,
    }
}

export const startLogin = (user) =>{
    return{
        type:START_LOGIN,
        payload:user
    }

}

export const failLogin = (err) =>{
    return{
        type:FAIL_LOGIN,
        payload:err
    }

}

export const startLogout = () =>{
    return{
        type:START_LOGOUT
    }

}