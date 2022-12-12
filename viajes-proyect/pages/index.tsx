import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { api, origins } from '../api/fligth'


interface props {
  origins: origins[]
}


export const getStaticProps: GetStaticProps<props> = async () => {

  const origins = await api.origins()

  return {
    props: {
      origins
    }
  }
}


const Home: NextPage<props> = ({ origins }) => {

  

  return (
    <section className='flex flex-col sm:w-full sm:flex-row justify-between items-center bg-blue-200  box-border '>
      {
        origins.map((origin, index) => {
          return (
            <article className="w-full sm:w-3/12 flex flex-col box-border h-0.8 p-2 overflow-auto rounded-xl border-2 m-2 hover:scale-110 hover:bg-blue-300 " key={index}>
              <h4 className='text-center text-xl font-mono'>{origin.origin}</h4>
              <p>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Exercitationem ullam
                beatae dolorem natus aspernatur culpa
               </p>
              <img src={origin.photo} className="w-full h-60" alt="photo.origin" />

              <button className='bg-black p-2 text-white rounded-md m-2 hover:cursor-pointer'><Link href={`/${origin.origin}`}>Ver Oferta </Link></button>


            </article>

          )
        })
      }
    </section>
  )
}

export default Home

