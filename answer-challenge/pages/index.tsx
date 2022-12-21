import type { GetStaticProps, NextPage } from 'next'
import { api } from "./api/api"
import { Anwser } from '../types/Anwser'
import { useState } from "react"

interface props {
  response: Anwser[]
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await api.data()

  return {
    props: {
      response
    }
  }
}



const Home: NextPage<props> = ({ response }) => {

  const [anwser, setAnwser] = useState<Anwser[]>(response)
  const [currentAnwser, setCurrentAnwser] = useState<number>(0)

  const handleButton = () => {
    setCurrentAnwser((currentAnwser) => currentAnwser + 1)
  }


  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen'>
      <section className='bg-slate-200 flex items-center justify-center flex-col my-8 border-2 rounded-xl'>
        <header className='bg-white w-fit -mt-4 rounded-lg p-2'>{currentAnwser + 1} / {anwser.length}</header>
        <section className='my-2 p-4 uppercase'>
          {
            anwser[currentAnwser]?.question
          }
        </section>
        <footer className='bg-white w-fit -mb-4 rounded-lg p-2'>{anwser[currentAnwser]?.category} / {anwser[currentAnwser]?.difficulty}</footer>
      </section>
      <section className='bg-slate-200 w-1/3 border-2 rounded-2xl p-4' >
        <ul>
          {
            [...anwser[currentAnwser]?.incorrect_answers, anwser[currentAnwser]?.correct_answer].map((anwser, index) => {
              return (
                <li key={index}>
                  <button className="border-2 rounded-lg bg-slate-100 p-2 text-xl w-full my-2 hover:bg-slate-300 active:bg-slate-400" onClick={handleButton}>{anwser}</button>
                </li>
              )
            })
          }
        </ul>
      </section>
    </main>
  )
}

export default Home

