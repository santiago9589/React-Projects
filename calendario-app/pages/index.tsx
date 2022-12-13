import type { NextPage } from 'next'
import { useState } from 'react'
import { startOfMonth } from "date-fns"



interface daySchedule {
  id: string,
  description: string
}

type sceduleDate = Map<string, Map<string, daySchedule>>


const Home: NextPage = () => {

  const [currentDay, setCurrentDay] = useState<Date>(new Date())

  const [scheduleState, setScheduleState] = useState<sceduleDate>(() => new Map())

  const handleSchedule = (key: string) => {
    const draft = new Map(scheduleState)

    if (!draft.has(key)) {
      draft.set(key, new Map())
    }

    const day = draft.get(key)

    let id = crypto.randomUUID()
    let description = window.prompt("what is the description?")

    if (!description) return

    day?.set(id, {
      id,
      description
    })

    setScheduleState(draft)
  }



  return (
    <main className='bg-slate-300 w-screen h-screen flex flex-col justify-center items-center overflow-auto'>
      <div className='mt-5'>
        <button onClick={() => setCurrentDay(new Date(currentDay.getFullYear(), currentDay.getMonth() - 1, currentDay.getDay()))} className='mr-4'>Anterior</button>
        {currentDay.toLocaleDateString("es-AR", {
          month: "long", year: "numeric"
        })}
        <button onClick={() => setCurrentDay(new Date(currentDay.getFullYear(), currentDay.getMonth() + 1, currentDay.getDay()))} className='ml-4'>Siguiente</button>
      </div>
      <section className='grid grid-cols-7 w-full h-full mt-4 p-4'>
        {
          Array.from({ length: startOfMonth(currentDay).getDay() - 1 }, (_, i) => {
            return (
              <div key={i + 1}>

              </div>
            )
          })
        }
        {
          Array.from({ length: new Date(currentDay.getFullYear(), currentDay.getMonth() + 1, 0).getDate() }, (_, i) => {

            const key = new Date(currentDay.getFullYear(), currentDay.getMonth(), i + 1).toLocaleDateString("es-AR", {
              day: "2-digit",
              month: "2-digit", year: "2-digit"
            })


            return (
              <div key={i + 1} onClick={() => handleSchedule(key)}>
                <>
                  {
                    scheduleState.get(key) ? (<div>
                       {
                         Array.from({length:scheduleState.get(key)!.size},(_,i)=>{
                          return (
                            <div>
                              </div>
                          )
                          })
                        
                       }
                    </div>) : (null)
                  }
                </>

                {i + 1}
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default Home

