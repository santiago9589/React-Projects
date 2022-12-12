import React from 'react'
import Image from 'next/image'

interface props {
  title: string

}

const Title = ({ title }: props) => {
  return (
    <header className="relative flex items-center justify-center col-span-full row-span-1">
      <h2 className='text-center text-lg font-serif'>{title}</h2>
      <section className='absolute right-0'>
        <Image src="/306889.svg" width={150} height={150} alt="logo" />
      </section>
    </header>
  )
}

export default Title

