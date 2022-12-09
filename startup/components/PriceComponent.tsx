import React, { useMemo, useState } from 'react'
import { Product } from '../api/product'
import { filters } from "../hooks/filters"
import { usePrice } from '../hooks/price'
import TitleFilter from './titleFilter'

interface PriceProps {
  handleChangePrice: (filter: filters) => void
}

const PriceComponent = ({ handleChangePrice }: PriceProps) => {

  const {minValue,maxValue,handleChangeMax,handleChangeMin} = usePrice(handleChangePrice)


  return (
    <div className='filter-container'>
      <TitleFilter title='Prices'/>
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