import type { NextPage } from 'next'
import { useState } from 'react'


interface Event {
  id: string
  name: string
}

type Schedule = Map<string, Map<string, Event>>

const Home: NextPage = () => {

  const [currentDay, setcurrentDay] = useState<Date>(() => new Date())
  const [scheduleState, setScheduleState] = useState<Schedule>(() => new Map())

  const handleChangeDate = (offset: number) => {
    const draft = new Date(currentDay)
    draft.setMonth(draft.getMonth() + offset)
    setcurrentDay(draft)
  }

  const handleChangeEvent = (key: string) => {
    const draft = new Map(scheduleState)

    if (!draft.has(key)) {
      draft.set(key, new Map())
    }

    const day = draft.get(key)
    const id = String(+new Date())
    const name = window.prompt("ingrese nombre de evento:")

    if (!name) return

    day?.set(id, {
      id: id,
      name: name
    })

    setScheduleState(draft)
  }

  const handleDeleteEvent = (key: string, id: string) => {

    const draft = new Map(scheduleState)

    const day = draft.get(key)

    day?.delete(id)

    setScheduleState(draft)
  }



  return (
    <div className='flex flex-col border-2 border-black p-2 m-0 w-screen h-screen'>
      <h3><button onClick={() => { handleChangeDate(-1) }}>-</button>{currentDay.toLocaleString("es-AR", { month: "long", year: "numeric" })}<button onClick={() => { handleChangeDate(1) }}>+</button></h3>
      <div className='grid grid-cols-7 gap-1 flex-1'>
        {
          Array.from({ length: new Date(currentDay.getFullYear(), currentDay.getMonth() + 1, 0).getDate() }, (_, i) => {

            const key = `${currentDay.getFullYear()}/${currentDay.getMonth() + 1}/${i + 1}`
            const events = scheduleState.get(key)
            return (
              <div key={i} className="border-2 border-lg  font-mono text-center w-40 h-28 overflow-auto flex flex-row" onClick={() => handleChangeEvent(key)}>
                {i + 1}
                {events && (
                  <div>
                    {
                      Array.from(events.values()).map((events, index) => {
                        return (
                          <div key={index} onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteEvent(key, events.id)
                          }}>
                            {events.id} {events.name}
                          </div>
                        )
                      })
                    }
                  </div>
                )}
              </div>
            )
          })
        }
        {/* <div className="border-2 border-lg p-2 font-mono text-xl text-center w-full h-full">Lunes</div>
      <div className="border-2 border-lg p-2 font-mono text-xl text-center w-full h-full">Lunes</div>
      <div className="border-2 border-lg p-2 font-mono text-xl text-center w-full h-full">Lunes</div>
      <div className="border-2 border-lg p-2 font-mono text-xl text-center w-full h-full">Lunes</div>
      <div className="border-2 border-lg p-2 font-mono text-xl text-center w-full h-full">Lunes</div>
      <div className="border-2 border-lg p-2 font-mono text-xl text-center w-full h-full">Lunes</div>
      <div className="border-2 border-lg p-2 font-mono text-xl text-center w-full h-full">Lunes</div> */}

        {/* <div className="flex flex-row border-2 border-lg p-2 font-mono text-xl text-center overflow-y-scroll w-full h-full">111 */}

      </div>
    </div>

  )
}

export default Home


{/* <div className="border-2 border-lg p-2 font-mono text-lg text-start overflow-y-scroll  w-32 h-24">sds</div> */ }