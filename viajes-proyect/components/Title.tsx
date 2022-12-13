import React from 'react'
import Image from 'next/image'

interface props {
  title: string

}

const Title = ({ title }: props) => {
  return (
    <header className="relative flex items-center justify-center col-span-full row-span-1">
      <h2 className='text-center text-lg font-serif'>{title}</h2>
    </header>
  )
}

export default Title

