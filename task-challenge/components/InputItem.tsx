import React from 'react'

interface props {
  name : string
  type: string
  value:string 
  errors:string    
  placeholder:string
  touched:boolean
  onChange:(e: React.ChangeEvent)=>void
}

const InputItem = ({name,errors,touched,...props}:props) => {
  return (
    <>
    <label>New Item</label>
    <input 
    name={name}
    {...props}
    autoFocus
    className=""
    />
    {errors && touched &&  (<span>{errors}</span>)}
    </>
  )
}

export default InputItem