import { useState } from "react"
import { Product } from "../api/product"

export const useList = () =>{
    const [list, setList] = useState<Product[]>()
    const [page, setPage] = useState<number>(0)
  
    const nextPage = (value: number) => {
      setPage((page) => page + value)
    }
  
    const prevPage = (value: number) => {
      if (page > 0) {
        setPage((page) => page - value)
      }
    }

    return{
        nextPage,prevPage,list,page,setList
    }
  
}