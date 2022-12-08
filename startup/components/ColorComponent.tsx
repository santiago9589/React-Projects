import React, { useEffect, useMemo, useState } from 'react'
import { Product } from '../api/product'
import { filters } from '../pages'

interface ColorProps {
  products: Product[]
  handleChangeColors:(filter:filters)=>void
}

const ColorComponent = ({ products,handleChangeColors }: ColorProps) => {

  const [colorsSelected,setColorsSelected] = useState<Set<string>>(()=>new Set())

  const colors = useMemo(() => {
    const draft: Set<string> = new Set()
    products.forEach((product) => draft.add(product.color))
    return Array.from(draft)
  }, [products])

  const handleChange = (color:string,isCheck:boolean)=>{
    const draft = structuredClone(colorsSelected)

    if(isCheck){
      draft.add(color)
    }else{
      draft.delete(color)
    }
    setColorsSelected(draft)

    handleChangeColors(draft.size ? (product)=>draft.has(product.color) : null)

  }




  return (
    <ul className='flex flex-col border-2 border-black p-2'>
      <h4 className='text-center'>ColorFilters</h4>
      {
        colors.map((color, index) => {
          return (
            <li className='flex items-center' key={index}>
              <input
                type="checkbox"
                name='color'
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