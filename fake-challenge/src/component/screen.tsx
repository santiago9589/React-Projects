import React from 'react'
import back from "../assets/header.png"
import ProductsComponent from './ProductsComponent'
import {useProduct }from "../../hooks/product.hook"

const ScreenComponent = () => {


    return (
        <main className='flex-1 p-2'>
            <section className="bg-background flex items-end bg-cover h-72 justify-start p-4">
                <header className='text-white text-2xl font-mono'>
                    Electronics
                </header>
            </section>
            <section>
                <ProductsComponent />
            </section>
        </main>
    )
}

export default ScreenComponent