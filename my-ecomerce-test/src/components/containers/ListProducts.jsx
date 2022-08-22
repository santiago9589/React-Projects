import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext"
import Product from "../pure/Product"

const ListProducts = () => {

    const { dispatch, state } = useContext(ProductContext)

    return (
        <div className="flex flex-col sm:flex-row" >
            {
                !state.products.length ?
                    (
                        <div>Sin productos...Escribe algo en la barra de busqueda</div>
                    ) : (
                        state.products.map((product, index) => {
                            return (
                                <Product key={index} product={product} dispatch={dispatch} />
                            )
                        })

                    )
            }
        </div>
    )
}

export default ListProducts;