import React, { useMemo, useState } from 'react'
import { useProduct } from '../../hooks/product.hook'
import { Filters } from "../../types/filterEnum"
import CounterComponent from './CounterComponent'
import FilterComponent from './FilterComponent'


const ProductsComponent = () => {

  const [filter, setFilter] = useState<Filters>(Filters.mostRecently)
  const products = useProduct()

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
      </header>
      <section className='grid grid-cols-3x gap-2'>
        {
          filterSelected.map((product, index) => {
            return (
              <div key={index}>
                {product.name}
              </div>
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