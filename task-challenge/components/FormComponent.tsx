import React from 'react'
import * as Yup from "yup"
import { useFormik } from 'formik'
import { Items } from '../types/Items'
import InputItem from "./InputItem"
import ButtonAdd from './ButtonAdd'
import ButtonCancel from "./ButtonCancel"
import Title from "./Title"

const FormComponent = () => {

    const initialValues = {
        name: " "
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required().max(12).min(4)
    })

    const formik = useFormik<Items>({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
            handleReset(values)
        }
    })

    const { handleSubmit, handleChange, values, errors, touched,handleReset } = formik

    return (
        <section>
            <Title title='Add item' />
            <form onSubmit={handleSubmit}>
                <InputItem
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    errors={errors.name!}
                    placeholder="new item"
                    touched={touched.name!}
                    
                />
                <ButtonAdd title='Add item' />
                <ButtonCancel title='Cancel' handleClick={() => { }} />
            </form>
        </section>
    )
}

export default FormComponent