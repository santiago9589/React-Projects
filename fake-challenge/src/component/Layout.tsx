import React from 'react'
import Navbar from './Navbar'

interface props {
    children: React.ReactNode
}


const Layout = ({ children }: props) => {
    return (
        <main>
            <Navbar/>
            {children}
        </main>
    )
}

export default Layout