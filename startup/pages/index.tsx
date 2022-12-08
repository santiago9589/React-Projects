import type { GetStaticProps, NextPage } from 'next'
import { useMemo, useState } from 'react'
import { api, Product } from '../api/product'
import CardProduct from '../components/CardProduct'
import ColorComponent from '../components/ColorComponent'
import PriceComponent from '../components/PriceComponent'
import RaitingComponent from '../components/RaitingComponent'
import { useList } from '../hooks/list'

interface propsProv {
  products: Product[]
}

interface propsIndex {
  products: Product[]
}





export const getStaticProps: GetStaticProps<propsProv> = async () => {
  const products = await api.list()
  return {
    props: {
      products
    }
  }
}

export type filters = null | ((product: Product) => boolean)



const Home: NextPage<propsIndex> = ({ products }) => {

  const { prevPage, nextPage, list, page, setList } = useList()
  const [filters, setFilters] = useState<Record<string, filters>>({
    color: null,
    price: null,
    raiting: null
  })

  useMemo(() => {
    let matches = products
    const filterFunc = Object.values(filters).filter(Boolean)
    filterFunc.forEach((filter) => {
      matches = matches.filter(filter!)
    })
    setList(matches)
  }, [filters, products])


  const handleChangeColors = (filter: filters) => {
    setFilters((filters) => ({ ...filters, color: filter }))
  }

  const handleChangeRaiting = (filter:filters) =>{
    setFilters((filters) => ({ ...filters, raiting: filter }))
  }

  const handleChangePrice = (filter:filters)=>{
    setFilters((filters) => ({ ...filters, price: filter }))
  }

  console.log(filters)

  return (
    <div className='bg-slate-100 w-screen h-screen flex flex-col overflow-auto '>
      <div>Categories</div>
      <div className='flex '>
        <aside className='flex flex-col flex-initial space-y-2 p-2'>
          <PriceComponent products={products} handleChangePrice={handleChangePrice}/>
          <ColorComponent products={products} handleChangeColors={handleChangeColors} />
          <RaitingComponent products={products} handleChangeRaiting={handleChangeRaiting}/>

        </aside>
        <section className='flex-1 p-2'>
          <div className='grid grid-cols-4x'>
            {
              list?.slice(page, page + 12).map((product, index) => {
                return (
                  <CardProduct key={index} product={product} />
                )
              })
            }
          </div>
          <div className='flex justify-center '>
            <button onClick={() => prevPage(12)}>Anterior</button>-/-{page < list?.length! ? <button onClick={() => nextPage(12)}>Siguiente</button> : null}
          </div>
        </section>

      </div>
    </div>
  )
}

export default Home

{/*  */ }