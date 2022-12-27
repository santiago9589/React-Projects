import { createContext } from "react";
import { Product } from "../product/types";


export interface contextProps {
    state: {
        cart: Product[]
    }
    actions: {
        handleEditSize: (product: Product, size: string) =>void
        handleEditQuantity: (product: Product, quantity: number) =>void
        handleAdd: (product: Product) => void
        setCart: React.Dispatch<React.SetStateAction<Product[]>>
    }
}

export const ContextApp = createContext<contextProps>({} as contextProps)