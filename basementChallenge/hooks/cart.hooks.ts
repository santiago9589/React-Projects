import { Dispatch, SetStateAction, useState } from "react"
import { Product } from "../product/types"

export const useCart = (): [Product[], Dispatch<SetStateAction<Product[]>>, (product: Product) => void
    , (product: Product, size: string) => void, (product: Product, quantity: number) => void] => {
    const [cart, setCart] = useState<Product[]>([])

    const handleAdd = (product: Product) => {
        if (!product) return
        setCart((cart) => [...cart, { ...product }])
    }

    const handleEditSize = (product: Product, size: string) => {
        if (!product) return
        const dratf = new Set(cart)
        if (dratf.has(product)) {
            product.options.size = size
            setCart(Array.from(dratf))
        }
    }

    const handleEditQuantity = (product: Product, quantity: number) => {
        if (!product) return
        const dratf = new Set(cart)
        if (dratf.has(product)) {
            product.options.quantity = quantity
            setCart(Array.from(dratf))
        }
    }


    return [cart, setCart, handleAdd, handleEditSize, handleEditQuantity]
}