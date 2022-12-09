import React from 'react'

interface propsTitle{
    title:string
}

const TitleFilter = ({title}:propsTitle) => {
  return (
    <h4 className='text-center text-xl font-mono'>{title}</h4>
  )
}

export default TitleFilter