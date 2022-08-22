import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext"
import { useNavigate } from "react-router-dom";
import { startBuy, backBuy } from "../../context/action"
const ModifyProduct = () => {

    const { state, dispatch } = useContext(ProductContext)
    const { productSelected, } = state
    const navigate = useNavigate()

    console.log(productSelected)
    return (
        <div>
            {
                productSelected.length ?
                    (
                        <div className="w-full sm:min-h-12 px-2">
                            <div className="text-xl font-bold text-start sm:text-center underline" >Detalle de producto</div>
                            <div className="flex flex-col space-1-y border-2 border-black w-52 sm:w-full">
                                <div className="detalle-product">nombre:{productSelected[0].title}</div>
                                <div className="detalle-product">id:{productSelected[0].id}</div>
                                <div className="detalle-product">precio:{productSelected[0].price}</div>
                                <div className="detalle-product">moneda:{productSelected[0].currency_id}</div>
                            </div>
                            <div className="w-full sm:min-h-12 px-2">
                                <img className="w-48  h-22  sm:w-full " src={productSelected[0].thumbnail} />
                            </div>

                            <div className="w-52 sm:min-h-10 px-2 sm:w-full mb-4 sm:mb-0">
                                <div className="text-lg text-start  sm:text-center">DIRECCION</div>
                                <div className="flex flex-col">
                                    <div className="detalle-product-seller">ciudad:{productSelected[0].address.city_name}</div>
                                    <div className="detalle-product-seller">provincia:{productSelected[0].address.state_name}</div>
                                </div>
                                <div className="text-lg text-start sm:text-center">VENDEDOR</div>
                                <div className="flex flex-col justify-between">
                                    <div className="detalle-product-seller">id:{productSelected[0].seller.id}</div>

                                </div>
                            </div>

                            <div className="flex flex-col justify-center  space-y-4 sm:space-y-2">
                                <div className="flex justify-around px-4">
                                    <button className="w-1/3 bg-red-200 rounded-md " onClick={() => {
                                        dispatch(backBuy(productSelected[0].title))
                                    }}>Quitar</button>
                                    <button className="w-1/3 bg-blue-200 rounded-md " onClick={() => {
                                        navigate(`/list`)
                                    }}>Listado</button>
                                </div>
                                <div className="flex justify-center px-2">
                                    <button onClick={() => {
                                        dispatch(startBuy(productSelected[0]))
                                    }}
                                        className="w-full bg-green-200 rounded-md px-2 my-2 sm:max-w-lg">Añadir al carrito</button>
                                </div>

                            </div>


                        </div>
                    ) :
                    (
                        <div>
                            <div>Sin usuario seleccionado</div>
                        </div>
                    )
            }
        </div>
    )
}

export default ModifyProduct;