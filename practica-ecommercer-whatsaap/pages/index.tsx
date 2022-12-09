import type { GetServerSideProps, NextPage } from 'next'
import { api } from '../api/Product'
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
  return (
    <div>

    </div>
  )
}

export default Home


