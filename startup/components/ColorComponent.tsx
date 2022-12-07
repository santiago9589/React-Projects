import React, { useEffect, useState } from 'react'
import { Product } from '../api/product'

interface ColorProps {
  products: Product[]
}

const ColorComponent = ({ products }: ColorProps) => {

  const [colors, setColors] = useState<string[]>([])
  const [colorsSelect, setColorsSelect] = useState<string[]>([])

  const addColors = () => {
    const draft = new Set<string>()
    for (let product of products) {
      draft.add(product.color)
    }
    setColors(Array.from(draft))
  }

  useEffect(() => {
    addColors()
  }, [])

  const handleClick = (color: string) => {
    const draft = new Set<string>()
    draft.add(color)
    setColorsSelect(Array.from(draft))
  }

  console.log(colorsSelect)

  return (
    <div className='flex flex-col'>
      {
        colors.map((color, index) => {
          return (
            <div className='flex items-center' key={index}>
              <label>{color}</label>
              <input
                type="checkbox"
                onChange={(e) => handleClick(color)}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default ColorComponent