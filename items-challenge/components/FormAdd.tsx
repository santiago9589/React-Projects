import React, { useRef } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { Item } from '../types/Item'

interface props {
    addItems: (item: Item) => Promise<void>
    onClose:VoidFunction
}

const FormAdd = ({ addItems,onClose }: props) => {

    const ref = useRef<HTMLInputElement>(null)

    const initialValues = {
        name: ""
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required().min(5).max(12)
    })

    const formik = useFormik<Item>({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            addItems(values)
            handleReset(values)
            ref.current?.focus()
        }
    })

    const { handleSubmit, handleChange, handleReset, values, errors, touched } = formik


    return (
        <section className='w-full h-full'>
            <h2 className='text-center text-3xl font-medium mt-2'>Add Items</h2>
            <form className='flex flex-col p-2 h-full' onSubmit={handleSubmit}>
                <label className='text-xl font-mono my-2 px-2'>Add Item</label>
                <input
                    type="text"
                    placeholder='new item'
                    className='rounded-xl p-2 border-2 focus:bg-slate-100 placeholder:text-left placeholder:text-xl placeholder:font-mono'
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                    autoFocus
                    ref={ref}
                />
                {touched.name && errors.name && (<div className='bg-red-200 text-lg rounded-lg p-2 my-2 font-semibold text-center'>{errors.name}</div>)}
                <section className='flex justify-around'>
                    <button type="submit" className='my-4 text-xl border-2 font-serif  w-1/3 rounded-lg bg-green-200 p-2 hover:bg-green-400 active:bg-green-500'>Create</button>
                    <button type="button" className='my-4 text-xl border-2 font-serif  w-1/3 rounded-lg bg-red-200 p-2 hover:bg-red-400 active:bg-red-500' onClick={onClose}>Cancel</button>
                </section>
            </form>
        </section>
    )
}

export default FormAdd