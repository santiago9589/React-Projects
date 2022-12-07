import React from 'react'
import { Product } from '../api/product'

interface ProductProps{
    product:Product
}

const CardProduct = ({product}:ProductProps) => {
  return (
    <div>
        <img className="w-48 h-48"alt={product.name} src={product.image}/>
        <section>
            <h4>{product.name}</h4>
            <p>{"★".repeat(product.rating).padEnd(5,"☆")}</p>
            <p>{product.price.toLocaleString("es-AR",{
                style:"currency",
                currency:"ARS"
            })}</p>
        </section>
    </div>
  )
}

export default CardProduct