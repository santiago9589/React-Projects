import React from 'react'
import logo from "../assets/logo.svg"
import coin from "../assets/icons/coin.svg"
import {useCoins} from "../../hooks/coins.hook"



const Navbar = () => {

    const [user,addCoin] = useCoins()
    return (
        <nav className='flex flex-row bg-white shadow-slate-300 border-2 w-full justify-between items-center mx-auto p-2 box-border h-12'>
            <img src={logo} alt="logo" />
            <section className='flex flex-row items-center justify-between max-w-[96%] '>
                <p className='mr-2'>{user.name}</p>
                <section onClick={()=>addCoin(1000)}className='flex flex-row items-center justify-between bg-blue-200 rounded-full p-1 hover:cursor-pointer'>
                    <p>{user.points}</p>
                    <img src={coin} />
                </section>
            </section>
        </nav>
    )
}

export default Navbar