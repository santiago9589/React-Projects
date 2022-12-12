import Image from 'next/image'
import React from 'react'

interface props {
  footer: string

}

const Footer = ({ footer }: props) => {

  return (
    <footer className="flex items-center justify-center col-span-full row-span-3">
      <Image src="/copyright-icon.svg" width={22} height={25} alt="logo" />
      <h2 className='ml-2 text-center text-lg font-serif'>{footer}</h2>
    </footer>
  )

}

export default Footer