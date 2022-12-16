import React, { useContext, useMemo, useState } from 'react'
import { ContextApi } from '../../context/context'
import { useProduct } from '../../hooks/product.hook'
import { Filters } from "../../types/filterEnum"
import { Product } from '../../types/product'
import CardProducts from './CardProducts'
import CounterComponent from './CounterComponent'
import FilterComponent from './FilterComponent'
import {useNavigate} from "react-router-dom"


const ProductsComponent = () => {

  const [filter, setFilter] = useState<Filters>(Filters.mostRecently)
  const [isSelected,setIsSelected] = useState<Product["_id"] | null>()
  const [products,handleBuy] = useProduct()
  const navigate = useNavigate()

  

  const onChangeFilter = (filter: Filters) => {
    setFilter(filter)
  }

  const filterSelected = useMemo(() => {
    switch (filter) {
      case Filters.highPrices: {
        return  [...products].sort((a,b)=>b.cost-a.cost)
      }
      case Filters.lowPrices: {
        return  [...products].sort((a,b)=>a.cost-b.cost)
      }
      case Filters.mostRecently: {  
        return [...products]
      } 
    }
  }, [filter, products])
  return (
    <section>
      <header className='flex flex-row space-x-4 mt-2'>
        <CounterComponent quantity={products.length} total={products.length} />
        <FilterComponent active={filter} onChange={onChangeFilter} />
        <button onClick={()=>navigate(`/history`)}>Show History</button>
      </header>
      <section className='grid grid-cols-3x gap-2 box-border'>
        {
          filterSelected.map((product, index) => {
            return (
              <CardProducts
              key={index} 
              handleClick={setIsSelected}
              product={product} 
              isSelected={isSelected === product._id} 
              handleBuy={handleBuy}
              />
            )
          })
        }
      </section>
      <footer>
        <CounterComponent quantity={products.length} total={products.length} />
      </footer>
    </section>
  )
}

export default ProductsComponent