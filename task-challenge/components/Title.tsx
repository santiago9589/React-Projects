import React from 'react'

interface props{
    title:string
}

const Title = ({title}:props) => {
  return (
    <h2 className='text-3xl font-mono'>{title}</h2>
  )
}

export default Title