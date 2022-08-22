import { useFormik } from "formik"
import * as yup from "yup"
import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { request } from "../../funcion/request"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { dispatch, state } = useContext(ProductContext)
    const navigate = useNavigate()

    const initValues = {
        email: "",
        password: ""
    }

    const validSchema = yup.object().shape({
        email: yup.string()
            .required("is Required"),
        password: yup.string()
            .required("is Required")
            .min(4, "8 caracters")
            .max(10, "10 caracters")
    })

    const formik = useFormik({
        initialValues: initValues,
        validationSchema: validSchema,
        onSubmit: (values) => {
            request(values, dispatch)
            handleReset()
            navigate(`/list`)
        }
    })

    const { values, errors, handleSubmit, handleChange, handleReset, touched } = formik
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-template">
                <div>
                    <label className="text-lg" htmlFor="email">Correo</label>
                    <input
                        name="email"
                        placeholder="eve.holt@reqres.in"
                        onChange={handleChange}
                        value={values.email}
                        className="input-form" />
                    {errors.email && touched.email && <div
                        className="error-msg-create"
                    >{errors.email}</div>}

                </div>
                <div>
                    <label className="text-lg" htmlFor="password">Clave</label>
                    <input
                        name="password"
                        placeholder="pistol"
                        onChange={handleChange}
                        value={values.password}
                        className="input-form" />
                    {errors.password && touched.password && <div
                        className="error-msg-create">{errors.password}</div>}
                </div>
                {state.errors && <div
                    className="error-msg-create">{state.errors}</div>}
                {state.isUser && <div
                    className="succes-msg-create">Registro Exitoso</div>}
                <button className="btn-form" type="submit">Ingresar</button>
            </div>
        </form>
    )
}

export default Login;