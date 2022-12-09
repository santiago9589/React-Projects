import { useState } from "react"
import { Product } from "../models/Product"

export const useTickets = ()=>{
    const [ticket, setTicket] = useState<Product[]>([])

    const deleteProduct = (product: Product) => {
        const draft = new Set<Product>(ticket)
        if (draft.has(product)) {
          draft.delete(product)
        }
    
        return setTicket(Array.from(draft))
    
      }

      return {
        ticket,setTicket,deleteProduct
      }
}