import React, { useContext, useEffect, useState } from 'react'
import { ContextApp } from '../context/contextApp'
import { Product } from '../product/types'
import { useQuantity } from '../hooks/quantity.hook'


interface props {
  product: Product
}

const CardAsideProduct = ({ product}: props) => {

  const [quantity, handleQuantity] = useQuantity()
  const {actions} = useContext(ContextApp)

  useEffect(()=>{
          actions.handleEditQuantity(product,quantity)
 
  },[quantity])


  return (
    <article className='border-2 border-white flex'>
      <section className='flex-2 p-2'>
        <img className='w-38 h-full' src={product.image} alt="image-product" />
      </section>
      <section className='flex flex-col flex-1 pl-2 relative sm:flex-row'>
        <h3 className='text-lg uppercase'>{product.name}</h3>
        <section className='absolute bottom-0 left-0 flex flex-col justify-between items-end min-w-full p-2 sm:flex-row'>

          <section>
            <section className='flex flex-col items-center sm:flex-row'>
              <p className='text-lg uppercase font-BasementGrotesque mr-2'>Quantity:</p>
              <section className='border-2 border-white p-2 rounded-rq text-center'>
                <button className='mr-2' onClick={()=>handleQuantity(-1)} >-</button>{quantity}<button className='ml-2' onClick={()=>handleQuantity(1)}>+</button>
              </section>
            </section>
            <section className='flex flex-col items-center sm:flex-row'>
              <p className='text-lg uppercase font-BasementGrotesque mr-2'>Size:</p>
              <ul className='flex space-x-3 items-center'>
                <li className={`${product.options.size === "S" ? ("border-2 rounded-rq  uppercase text-xl") : (null)}`} onClick={()=>{actions.handleEditSize(product,"S")}}>S</li>
                <li className={`${product.options.size === "M" ? ("border-2 rounded-rq  uppercase text-xl") : (null)}`} onClick={()=>{actions.handleEditSize(product,"M")}}>M</li>
                <li className={`${product.options.size === "L" ? ("border-2 rounded-rq  uppercase text-xl") : (null)}`} onClick={()=>{actions.handleEditSize(product,"L")}}>L</li>
                <li className={`${product.options.size === "XL" ? ("border-2 rounded-rq  uppercase text-xl") : (null)}`} onClick={()=>{actions.handleEditSize(product,"XL")}}>XL</li>
              </ul>
            </section>
          </section>
          <section>
            <p className='text-2xl mt-2 sm:mt-0  uppercase font-BasementGrotesque font-bold' >{(product.price*quantity).toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS"
            })}</p>
          </section>
        </section>
      </section>
    </article>
  )
}

export default CardAsideProduct