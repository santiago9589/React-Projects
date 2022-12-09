import React, { useMemo, useState } from 'react'
import { Product } from '../api/product'
import { useColors } from '../hooks/colors'
import { filters } from "../hooks/filters"
import TitleFilter from './titleFilter'

interface ColorProps {
  products: Product[]
  handleChangeColors:(filter:filters)=>void
}

const ColorComponent = ({ products,handleChangeColors}: ColorProps) => {


  const {handleChange} = useColors(handleChangeColors)

  const colors = useMemo(() => {
    const draft: Set<string> = new Set()
    products.forEach((product) => draft.add(product.color))
    return Array.from(draft)
    
  }, [products])

  


  return (
    <ul className='flex flex-col filter-container'>
     <TitleFilter title="Colors"/>
      {
        colors.map((color, index) => {
          return (
            <li className='flex items-center' key={index}>
              <input
                type="checkbox"
                name={color}
                value={color}
                onChange={(e)=>{
                  handleChange(color,e.target.checked)
                }}
              /> 
              <label className='mb-1 ml-1'>{color}</label>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ColorComponent