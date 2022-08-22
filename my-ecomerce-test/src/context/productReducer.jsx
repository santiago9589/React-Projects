import {
    GET_DATA, GET_ERRORS, START_MODIFY_DATA,
    START_BUY, BACK_BUY, FINISH_MODIFY_DATA, FAIL_LOGIN, START_LOGOUT, FILTER_PRODUCT, CLEAR_BUY, START_LOGIN
} from "./actiontype"


export const data = {
    products: [],
    errors: [],
    productSelected: [],
    filterProducts: [],
    productsToBuy: [],
    isUser: false
}

export const productReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                products: action.payload
            }
        case GET_ERRORS:
            return {
                ...state,
                errors: action.payload
            }
        case START_MODIFY_DATA:
            return {
                ...state,
                productSelected: [...state.products.filter((element) => {
                    return element.id === action.payload
                })]
            }
        case FINISH_MODIFY_DATA:
            return {
                ...state,
                productSelected: []
            }
        case FILTER_PRODUCT:
            return {
                ...state,
                filterProducts: [...state.products.filter((element) => {
                    return element.product.title.includes(action.payload)
                })]
            }
        case START_BUY:
            return {
                ...state,
                productsToBuy: [...state.productsToBuy, action.payload]
            }
        case BACK_BUY:

            let arr = state.productsToBuy.splice(action.payload, 1)

            return {
                ...state,
                productsToBuy: [...state.productsToBuy]
            }
        case CLEAR_BUY:
            return {
                ...state,
                productsToBuy: [],
                errors: []
            }

        case START_LOGIN:
            return {
                ...state,
                isUser: action.payload,
                errors: []
            }
        case START_LOGOUT:
            return {
                ...state,
                products: [],
                errors: [],
                productSelected: [],
                filterProducts: [],
                productsToBuy: [],
                isUser: false

            }
        case FAIL_LOGIN:
            return {
                ...state,
                errors: action.payload,
                isUser: false

            }
        default:
            return state

    }
}