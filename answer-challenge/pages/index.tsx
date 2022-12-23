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
  const [points, setPoints] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleButton = (response: string, type: Anwser["type"]) => {
    setIsLoading(true)
    setTimeout(() => {
      if (!response || !type) return

      switch (type) {
        case "boolean":

          if (response === anwser[currentAnwser].correct_answer) {
            setPoints((points) => points + 5)
          }

          break;
        case "multiple":

          if (response === anwser[currentAnwser].correct_answer) {
            setPoints((points) => points + 10)
          }

          break;
        default:
          break;
      }
      setCurrentAnwser((currentAnwser) => currentAnwser + 1)
      setIsLoading(false)
    }, 1000)
  }

  const handleReset = () => {
    setCurrentAnwser(0)
  }

  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen'>
      {
        currentAnwser < anwser.length ? (
          <> {
            !isLoading ? (
              <>
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
                      [...anwser[currentAnwser]?.incorrect_answers, anwser[currentAnwser]?.correct_answer].sort().map((response, index) => {
                        return (
                          <li key={index}>
                            <button className="border-2 rounded-lg bg-slate-100 p-2 text-xl w-full my-2 hover:bg-slate-300 active:bg-slate-400" onClick={() => handleButton(response, anwser[currentAnwser].type)}>{response}</button>
                          </li>
                        )
                      })
                    }
                  </ul>
                </section>
              </>
            ) : (
              <section className='flex flex-col items-center justify-center'>
                <h2 className='mb-4 text-2xl font-mono'>Loading</h2>
                <div className='border-8 rounded-full border-black w-40 h-40 border-l-transparent animate-spin' ></div>
              </section>)
          }
          </>
        ) : (
          <>
            <section className='bg-white flex items-center justify-center flex-col my-8 border-2 rounded-xl'>
              <article className='p-4'>
                <h2 className='text-center uppercase text-xl mb-2'>Juego Finalizado</h2>
                <p className='text-center uppercase mb-2 text-green-600' > Obtuviste {points} punto(s) totales </p>
                <section className='flex flex-col justify-center items-center my-2'>
                  <p className='text-center uppercase mb-2 font-serif'>Deseas volver a jugar?</p>
                  <button onClick={() => handleReset()} className='bg-blue-200 p-2 rounded-lg border-2 hover:bg-blue-300 active:bg-blue-400 mt-2 cursor-pointer text-xl font-serif'>Volver a jugar</button>
                </section>
              </article>
            </section>
          </>
        )
      }
    </main>
  )
}

export default Home



