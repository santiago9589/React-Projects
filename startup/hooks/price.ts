import { useState } from "react"
import { filters } from "./filters"

export const usePrice = (handleChangePrice: (filter: filters) => void) =>{
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

    return {
        minValue,maxValue,handleChangeMax,handleChangeMin
    }
}