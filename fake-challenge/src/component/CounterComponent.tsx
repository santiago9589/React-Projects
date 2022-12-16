import React from 'react'

interface props{
    quantity:number
    total:number
}


const CounterComponent = ({quantity,total}:props) => {
  return (
    <span className='p-2 m-2'>{quantity} de {total} productos totales</span>
  )
}

export default CounterComponent