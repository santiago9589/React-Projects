import React from 'react'

interface props{
    title:string
    handleClick:VoidFunction
}

const ButtonCancel = ({title,handleClick}:props) => {
  return (
    <button onClick={handleClick}>{title}</button>
  )
}

export default ButtonCancel