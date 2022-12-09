import React from 'react'

interface props{
    Title:string
}

const Title = ({Title}:props) => {
  return (
    <h3 className='text-center'>{Title}</h3>
  )
}

export default Title