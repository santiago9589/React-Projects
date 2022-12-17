import Title from "../components/Title"
import { Items } from "../types/Items"
import { useState } from "react"
import ItemCard from "../components/ItemCard"
import FormComponent from "../components/FormComponent"

function App() {

  const [list, setList] = useState<Items[]>([{ name: "juan" }])


  return (
    <main className="flex flex-col w-1/2 mx-auto items-center justify-center">
      <section className="bg-white mt-48 w-full rounded-lg border-2 p-2 flex flex-col">
        <h2 className="text-center font-mono text-2xl my-2 p-2">Supermarket list</h2>
        <ul className="p-2 m-2 bg-slate-200  rounded-xl  border-2 shadow-lg shadow-slate-400S">
          {
            list.map((item, index) => {
              return (
                <li key={index}>
                  <ItemCard item={item} />
                </li>
              )
            })
          }
        </ul>
        <button className="button-primary">Add Item</button>
      </section>

      {/* <FormComponent/> */}
    </main>
  )
}

export default App
