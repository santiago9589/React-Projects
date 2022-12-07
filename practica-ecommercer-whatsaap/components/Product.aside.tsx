import React, { Dispatch, SetStateAction } from 'react'
import { Product } from '../models/Product'

interface propsProductAside {
    Product: Product
    deleteProduct: (product: Product) => void
}

const ProductComponentAside = ({ Product,deleteProduct }: propsProductAside) => {
    return (
        <div onClick={()=>deleteProduct(Product)} className='flex flex-col justify-center w-full items-center p-2 border-2 border-black'>
            <h4>{Product.title}</h4>
            <div>
                <p>{Product.price.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS"
                })}</p>
            </div>
        </div>
    )
}

export default ProductComponentAside