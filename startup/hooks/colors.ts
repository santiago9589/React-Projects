import { useState } from "react"
import { filters } from "./filters"

export const useColors = (handleChangeColors:(filter:filters)=>void) =>{
    const [colorsSelected,setColorsSelected] = useState<Set<string>>(()=>new Set())

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

      return {
        colorsSelected,handleChange,setColorsSelected
      }
}