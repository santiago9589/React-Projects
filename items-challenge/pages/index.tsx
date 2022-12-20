import type { NextPage } from 'next'
import { useState } from 'react'
import FormAdd from '../components/FormAdd'
import ItemComponent from '../components/ItemComponent'
import Modal from '../components/Modal'
import { Item } from '../types/Item'
import {api} from "./api/api"



const Home: NextPage = () => {

  const [items, setItems] = useState<Item[]>([])
  const [isVisible, setIsVisible] = useState<Boolean>()


  const addItems = async(item:Item)=>{
    await  api.addItems(item).then((res)=>{
        setItems([...items,res])
    })
  }

  const deleteItems = async(item:Item)=>{
    await api.deleteItems(item).then((res)=>{
        const dratf = new Set(items)
        if(dratf.has(res)){
          dratf.delete(res)
          setItems(Array.from(dratf))
        }
    })
  }


  return (
    <main className='flex items-center justify-center w-screen h-screen'>
      <section className='flex w-1/2 h-1/2  flex-col justify-start items-center bg-white rounded-2xl'>
        <h2 className='text-4xl font-mono text-center my-2'>Market List</h2>
        <span  className='my-2 text-xl'>{items.length} Item(s)</span>
        {
          items && (
            <ul className='w-full overflow-auto h-full p-2'>
              {
                items.map((item, index) => {
                  return (
                    <li key={index}>
                      <ItemComponent Item={item} deleteItems={deleteItems}/>
                    </li>
                  )
                })
              }
            </ul>
          )
        }
        <button  autoFocus onClick={() => setIsVisible(true)} className='my-4 text-xl border-2 font-serif  rounded-lg bg-green-200 p-2 hover:bg-green-400 active:bg-green-500'>Add item</button>
      </section>
      {
        isVisible && (<Modal onClose={() => setIsVisible(false)}>
          <FormAdd addItems={addItems} onClose={() => setIsVisible(false)}/>
        </Modal>)
      }
    </main>
  )
}

export default Home

