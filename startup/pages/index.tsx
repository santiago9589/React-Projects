import type { GetStaticProps, NextPage } from 'next'
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




const Home: NextPage<propsIndex> = ({ products }) => {

  const {prevPage,nextPage,list,page,setList} = useList(products)

  return (
    <div className='bg-slate-100 w-screen h-screen flex flex-col overflow-auto '>
      <div>Categories</div>
      <div className='flex'>
        <aside className='flex flex-col flex-initial'>
          <PriceComponent />
          <ColorComponent products={products}/>
          <RaitingComponent />

        </aside>
        <section className='flex-1 p-2'>
          <div className='grid grid-cols-4x'>
            {
              list.slice(page, page + 12).map((product, index) => {
                return (
                  <CardProduct key={index} product={product} />
                )
              })
            }
          </div>
          <div className='flex justify-center '>
            <button onClick={() => prevPage(12)}>Anterior</button>-/-<button onClick={() => nextPage(12)}>Siguiente</button>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Home

{/*  */ }