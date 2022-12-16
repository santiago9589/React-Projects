import React from 'react'
import { Product } from '../../types/product'
import coin from "../assets/icons/coin.svg"
import {useUser} from "../../hooks/user.hook"

interface props {
    product: Product
    isSelected: boolean
    handleClick: (id: Product["_id"]) => void
    handleBuy : (product: Product) => Promise<void>
}

const CardProducts = ({ product, isSelected, handleClick,handleBuy }: props) => {

    const user = useUser()
    const canBuy = user.points>=product.cost

    return (
        <article onClick={()=>{handleClick(product._id)}} className={ canBuy ? 'bg-white shadow-xl cursor-pointer shadow-slate-200 relative p-8 rounded-lg m-2'
        : 'bg-white shadow-xl shadow-slate-200 relative p-8 rounded-lg m-2 opacity-40 cursor-not-allowed'}>
            <section className='bg-slate-200 flex items-center justify-center absolute text-orange-400 p-4 top-1 right-1 rounded-full h-12 w-12'>
                <p>{product.cost}</p>
                <img src={coin} width={300} height={300} alt="coin.svg" />
            </section>
            <section>
                <img src={product.img.url} className="mt-2" alt="photo.product"/>
                <section className='flex flex-col items-start '>
                    <p>{product.category}</p>
                    <p className='text-xl font-serif'>{product.name}</p>
                </section>
            </section>
            {
                isSelected && canBuy && (
                    <div className='bg-blue-100 opacity-90  absolute top-0 left-0 w-full h-full flex flex-col  items-center justify-center  rounded-lg'>
                         <p className='text-xl font-mono'>{user.points}</p> 
                         <p className='text-xl font-mono'>{product.cost}</p>
                         <p className='text-xl font-mono' >{user.points - product.cost}</p>
                         <button onClick={()=>handleBuy(product)} className='bg-orange-300 p-2 rounded-xl text-xl m-2 text-white hover:scale-110 '>Buy Item</button>
                    </div>
                )
            }
        </article>
    )
}

export default CardProducts