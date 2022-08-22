import { useReducer } from "react"
import { ProductContext } from "./productContext"
import{productReducer,data} from "./productReducer"


const ProductContextProvider = ({children}) => {


    const [state,dispatch] = useReducer(productReducer,data)

    

    return (
        <ProductContext.Provider value={{dispatch,state}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;