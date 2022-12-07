import React, { Dispatch, SetStateAction } from 'react'
import { Product } from '../models/Product'

interface propsProduct {
    Product: Product
    setTicket: Dispatch<SetStateAction<Product[]>>
}

const ProductComponent = ({ Product, setTicket }: propsProduct) => {
    return (
        <div className='flex flex-col w-full h-full justify-between'>
            <section>
                <div>juansas</div>
                <h4>{Product.title}</h4>
                <p>{Product.id}</p>
                <p>{Product.price.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS"
                })}</p>
            </section>
            <div className='flex flex-col justify-center'>
                <img className="h-48 w-full" alt={Product.title} src={Product.img} />
                <button className="bg-slate-200 p-2 font-mono text-xl" onClick={() => setTicket((ticket) => [...ticket, Product])}>Agregar</button>
            </div>
        </div>
    )
}

export default ProductComponent