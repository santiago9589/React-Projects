import React from 'react'
import { Filters } from '../../types/filterEnum'

interface props{
    active:Filters
    onChange:(filter: Filters) => void
}

const FILTERS = [Filters.highPrices,Filters.lowPrices,Filters.mostRecently]

const FilterComponent = ({active,onChange}:props) => {

  return (
    <section className='flex flex- items-center'>
        <span className='text-xl font-thin mr-4' >Sort By:</span> {
            FILTERS.map((filter,index)=>{
                return (
                    <div key={index} className={active === filter ? " text-lg p-2 px-2 mx-2 rounded-full bg-blue-200 font-semibold text-black" : "p-2 px-2 mx-2  rounded-full rounded-lg font-semibold text-lg"} onClick={()=>onChange(filter)}>
                        {filter}
                    </div>
                )
            })
        }
    </section>
  )
}

export default FilterComponent