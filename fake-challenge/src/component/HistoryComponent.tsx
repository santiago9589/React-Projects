import React from 'react'
import {useNavigate} from "react-router-dom"
import { useProduct } from '../../hooks/product.hook'

const HistoryComponent = () => {

    const navigate = useNavigate()
    const [products,handleBuy,history] = useProduct()

  return (
    <section>
      <header className='flex flex-row space-x-4 mt-2 p-2'>
        <button className="bg-slate-300 text-xl font-mono p-2 rounded-lg"onClick={()=>navigate(`/`)}>Back Menu</button>
      </header>
      <section className='grid grid-cols-3x gap-2 box-border mt-4 p-2'>
      {
          history.map((product, index) => {
            return (
              <span className='text-xl font-serif' key={index}>{product.name}</span>
            )
          })
        }
      </section>
    </section>
  )
}

export default HistoryComponent