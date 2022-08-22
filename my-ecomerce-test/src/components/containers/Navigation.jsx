import React from "react";
import { Link } from "react-router-dom"
import { useContext, useState } from "react";
import { ProductContext } from "../../context/productContext"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { setData, setError, startLogout } from "../../context/action";

const Navigate = () => {


    const [search, setSearch] = useState(" ")
    const { dispatch, state } = useContext(ProductContext)
    const navigate = useNavigate()

    const handleChange = (value) => {
        setSearch(value)
    }

    useEffect(() => {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`).then((resolve) => {
            dispatch(setData(resolve.data.results))
        }).catch((error) => {
            dispatch(setError(error.message))
        })
    }, [search])

    return (
        <div>
            {
                state.isUser ?
                    (
                        <div className="nav-bar">
                            <div>
                                <Link className="nav-bar-link" to="/" >
                                    HOME
                                </Link>
                                <Link className="nav-bar-link" to="/list" >
                                    LISTADO
                                </Link>
                                <Link className="nav-bar-link" to="/detailbuy" >
                                    COMPRA
                                </Link>
                                <a className="nav-bar-link" onClick={() => {
                                    dispatch(startLogout())
                                    navigate(`/login`)
                                }}>LOGOUT</a>
                            </div>
                            <div className="sm:flex sm:justify-between sm:items-center">
                                <label clasName="text-lg" htmlFor="search">Buscar</label>
                                <input className="w-full border-2 rounded-lg shadow-lg sm:max-w-xs sm:max-h-7 sm:ml-3"
                                    name="search"
                                    onChange={(e) => handleChange(e.target.value)}
                                    value={search} />
                            </div>
                        </div>
                    ) : (
                        <div className="nav-bar">
                            <div>
                                <Link className="nav-bar-link" to="/login" >
                                    SE INGRESA CON LOS VALOS DEL PLACEHOLDER
                                </Link>
                            </div>

                        </div>
                    )
            }
        </div>
    )
}

export default Navigate;

