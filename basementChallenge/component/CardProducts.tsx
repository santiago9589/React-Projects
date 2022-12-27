import React, {  useContext, useState } from 'react'
import { Product } from '../product/types'
import Image from "next/image";
import addToCard from "../public/Frame.svg"
import { ContextApp } from '../context/contextApp';

interface props {
    product: Product
}

const CardProducts = ({ product}: props) => {

    const [visible, setVisible] = useState<boolean>(false)
    const {actions} = useContext(ContextApp)

    return (
        <article onClick={()=>actions.handleAdd(product)} onMouseOver={() => { setVisible(true) }} onMouseOut={() => { setVisible(false) }} className={`my-2 p-2 bg-gradient-to-t from-black via-white to-black min-w-full h-full flex flex-col cursor-pointer relative flex-1 sm:min-w-0`}>
            <img className='cover h-full p-2' alt="imageProduct" src={product.image} />
            <section className='border-t-2  border-white flex justify-between items-center'>
                <p className='text-lg capitalize font-BasementGrotesque font-bold' >{product.id}</p>
                <p className='text-lg uppercase font-BasementGrotesque font-bold' >{product.price.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS"
                })}</p>
            </section>
            <section className={`absolute flex items-center justify-center top-0 left-0 h-full min-w-full z-10 ${visible ? "visible" : "invisible"}`}>
                <b className=' absolute top-0 left-0 h-full min-w-full bg-black opacity-20 z-20' />
                <Image src={addToCard} alt="addToCard" />
            </section>
        </article>
    )
}

export default CardProducts