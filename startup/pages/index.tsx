import type { GetStaticProps, NextPage } from 'next'
import { useMemo, useState } from 'react'
import { api, Product } from '../api/product'
import CardProduct from '../components/CardProduct'
import ColorComponent from '../components/ColorComponent'
import PriceComponent from '../components/PriceComponent'
import RaitingComponent from '../components/RaitingComponent'
import { useFilters } from '../hooks/filters'
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
const Home: NextPage<propsIndex> = ({ products }) => {

  const { prevPage, nextPage, list, page, setList } = useList()
  const{handleChangeColors,handleChangePrice,handleChangeRaiting,filters} = useFilters()
  
  useMemo(() => {
    let matches = products
    const filterFunc = Object.values(filters).filter(Boolean)
    filterFunc.forEach((filter) => {
      matches = matches.filter(filter!)
    })
    setList(matches)
  }, [filters, products])

  return (
    <main className='bg-slate-100 w-screen h-screen flex flex-col overflow-auto '>
      <h2 className='text-center text-2xl'>Fake Ecommerce</h2>
      <div className='flex '>
        <aside className='flex flex-col flex-initial space-y-2 p-2'>
          <PriceComponent handleChangePrice={handleChangePrice} />
          <ColorComponent products={products} handleChangeColors={handleChangeColors} />
          <RaitingComponent products={products} handleChangeRaiting={handleChangeRaiting} />

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
          <div className='flex flex-col justify-center'>
            <h3 className='text-center'>{list?.length} products matched</h3>
            <button onClick={() => prevPage(12)}>Anterior</button>{page < list?.length! ? <button onClick={() => nextPage(12)}>Siguiente</button> : null}
          </div>
        </section>

      </div>
    </main>
  )
}

export default Home

{/*  */ }