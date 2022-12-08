import React, { useMemo, useState } from 'react'
import { Product } from '../api/product'
import { filters } from '../pages'

interface RaitingProps {
  handleChangeRaiting:(filter:filters)=>void
  products:Product[]
}


const RaitingComponent = ({handleChangeRaiting,products}:RaitingProps) => {

  const raiting = useMemo(()=>{
    const draft = new Set<number>()
    products.forEach((product)=>draft.add(product.rating))
    return Array.from(draft)
  },[products])

  const handleClick = (range:number)=>{
    handleChangeRaiting((product)=>product.rating === range)
  }

  return (
    <ul className='border-2 border-black p-2' >
      <h4 className='text-center'>RaitingFilters</h4>
      {
        raiting.sort().map((range,index)=>{
          return(
            <li key={index} onClick={()=>{handleClick(range)}}>
                <p>{"★".repeat(range).padEnd(5,"☆")}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

export default RaitingComponent