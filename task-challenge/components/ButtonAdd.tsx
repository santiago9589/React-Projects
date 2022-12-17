import React from 'react'

interface props{
    title:string
    
}

const ButtonAdd = ({title}:props) => {
  return (
    <button type="submit">{title}</button>
  )
}

export default ButtonAdd