import React, { useMemo, useState } from 'react'
import { Product } from '../api/product'
import { filters } from '../pages'

interface PriceProps {
  products: Product[]
  handleChangePrice: (filter: filters) => void
}

type valuesNum = Record<string, number>

const PriceComponent = ({ products, handleChangePrice }: PriceProps) => {

  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)

  const handleChangeMin = (value: number) => {
    setMinValue(value)
    handleChangePrice(value ? (product) => ((product.price > value) && (product.price <= maxValue)) : null)
  }

  const handleChangeMax = (value: number) => {
    setMaxValue(value)
    handleChangePrice(value ? (product) => ((product.price <= value) && (product.price >= minValue)) : null)
  }


  return (
    <div className='border-2 border-black p-2'>
      <h4 className='text-center'>PriceFilters</h4>
      <div className='flex flex-col '>
        <label htmlFor='price'>Min</label>
        <input
          type="number"
          value={minValue}
          onChange={(e) => handleChangeMin(parseFloat(e.target.value))}
        />
        <label htmlFor='price'>Max</label>
        <input
          type="number"
          value={maxValue}
          onChange={(e) => handleChangeMax(parseFloat(e.target.value))}
        />
      </div>
    </div>
  )
}

export default PriceComponent