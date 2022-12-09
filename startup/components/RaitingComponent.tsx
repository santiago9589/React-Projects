import React, { useMemo, useState } from 'react'
import { Product } from '../api/product'
import { filters } from "../hooks/filters"
import { useRaiting } from '../hooks/raintig'
import TitleFilter from './titleFilter'

interface RaitingProps {
  handleChangeRaiting: (filter: filters) => void
  products: Product[]
}


const RaitingComponent = ({ handleChangeRaiting, products }: RaitingProps) => {

  const {handleClick} = useRaiting(handleChangeRaiting)

  const raiting = useMemo(() => {
    const draft = new Set<number>()
    products.forEach((product) => draft.add(product.rating))
    return Array.from(draft)
  }, [products])

 


  return (
    <ul className='filter-container' >
      <TitleFilter title='Raiting'/>
      {
        raiting.sort().map((range, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                name='start'
                value={range}
                onChange={(e) => {
                  handleClick(range, e.target.checked)
                }}
              />
              <label className='ml-2'>{"★".repeat(range).padEnd(5, "☆")}</label>


            </li>
          )
        })
      }
    </ul>
  )
}

export default RaitingComponent

