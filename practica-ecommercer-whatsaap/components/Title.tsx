import React from 'react'

interface props{
    Title:string
}

const Title = ({Title}:props) => {
  return (
    <h3>{Title}</h3>
  )
}

export default Title