import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { api } from '../api/Product'
import ProductComponent from '../components/Product'
import ProductComponentAside from '../components/Product.aside'
import Title from '../components/Title'
import { useTickets } from '../hooks/ticket'
import { Product } from '../models/Product'


interface propsHome {
  products: Product[]

}

interface props {
  products: Product[]

}


export const getServerSideProps: GetServerSideProps<props> = async () => {

  const products = await api.list("categories")

  return {
    props: {
      products
    }
  }

}

const Home: NextPage<propsHome> = ({ products }) => {

  const {ticket,setTicket,deleteProduct} = useTickets()
  const [view, setView] = useState<boolean>(false)


  const key = useMemo(() => {

    return ticket.reduce((message: string, product: Product) => {
      return message.concat(`*${product.title} - ${product.price.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS"
      })}\n`)
    }, "").concat(`\n Total: ${ticket.reduce((total, product) => {
      return total + product.price
    }, 0)}$`)

  }, [ticket])


  return (
    <>
      <Title Title='SERPO ECOMMERCE' />
      <div className='grid grid-cols-4x gap-4 bg-blue-200 w-screen h-screen overflow-scroll relative'>
        {
          products.map((product, index) => {
            return (
              <ProductComponent Product={product} key={index} setTicket={setTicket} />
            )
          })
        }
        {
          ticket.length && !view ? (
            <div className='fixed mt-2 bg-green-300 bottom-0 left-0 w-full text-center flex  justify-between z-10 m-2'>
              <Link href={`https://wa.me/541123465456?text=${encodeURIComponent(key)}`}>Ir a whatsapp</Link>
              <span>{`${ticket.length} productos seleccionados`}</span>
            </div>
          ) : null
        }

        {
          ticket.length ? (
            <div onClick={() => setView((view) => !view)} className='fixed bg-blue-500 top-1 right-5 z-20'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          ) : null
        }

        {
          view && ticket.length ? (
            <aside className='flex overflow-y-auto flex-col absolute right-0 buttom-0 bg-white h-full w-52 z-10'>
              {
                ticket.map((product, index) => {
                  return (
                    <ProductComponentAside key={index} Product={product} deleteProduct={deleteProduct} />
                  )
                })
              }
              <span>{`Total: ${ticket.reduce((total, product) => {
                return total + product.price
              }, 0)}$`}</span>
            </aside>
          ) : null
        }
      </div>
    </>

  )
}


export default Home