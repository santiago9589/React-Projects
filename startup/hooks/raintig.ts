import { useState } from "react"
import { filters } from "./filters"

export const useRaiting = (handleChangeRaiting: (filter: filters) => void) =>{
    const [raitingSelected,setRaitingSelected] = useState<Set<number>>(()=>new Set())

    const handleClick = (range: number, isCheck: boolean) => {
        const draft = structuredClone(raitingSelected)
        if (isCheck) {
          draft.add(range)
        } else {
          draft.delete(range)
        }
    
        setRaitingSelected(draft)
    
        handleChangeRaiting(draft.size ? (product) => draft.has(product.rating) : null)
      }

      return {handleClick}
}