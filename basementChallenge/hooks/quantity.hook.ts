import { useState } from "react"

export const useQuantity = ():[number,(number: number) => void]=>{
    const [quantity, setQuantity] = useState<number>(1)

    const handleQuantity = (number:number) =>{
        if(quantity>=1){
          setQuantity((quantity)=>quantity+number)
        }else{
          setQuantity((quantity)=>quantity+1)
        }
      }
    
    return [quantity,handleQuantity]
}