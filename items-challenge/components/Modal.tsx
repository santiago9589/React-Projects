import React from 'react'

interface props {
    children: React.ReactNode
    onClose:VoidFunction
}

const Modal = ({ children,onClose }: props) => {
    return (
        <section onKeyDown={(e)=>e.key === "Escape" && onClose()}
            className='w-screen h-screen flex flex-col justify-center items-center absolute top-0 right-0'>
            <b className='w-screen h-screen absolute bg-black opacity-20 top-0 right-0 ' onClick={onClose}/>
            <section className='bg-white z-10 w-1/3 h-0.45 rounded-xl'>
                {children}
            </section>
            <p className='text-red-400 text-xl'>Press "ESC" to cancel</p>
        </section>
    )
}

export default Modal





























// <section className='absolute top-0 right-0 w-screen h-screen flex justify-start items-center'>
//             <b className='absolute top-0 right-0 w-screen h-screen bg-black opacity-20' />
//             <section className='z-10 bg-white w-full'>
//                 {children}
//             </section>
//         </section>