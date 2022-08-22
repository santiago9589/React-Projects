import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext"
import ProductBuy from "../pure/ProductBuy"
import { clearBuy } from "../../context/action"


const DetailBuy = () => {

    const { state, dispatch } = useContext(ProductContext)
    const { productsToBuy } = state

    return (
        <div>
            {
                productsToBuy.length ?
                    <div>
                        {
                            productsToBuy.map((element, index) => {
                                return (
                                    <ProductBuy id={index} key={index} product={element} dispatch={dispatch} />
                                )
                            })
                        }
                        <div className="flex flex-col">
                            <button className="w-full bg-blue-200 rounded-md p-0.75 m-1"
                                onClick={() => {
                                    if (!productsToBuy) return
                                    console.log(productsToBuy)
                                    alert("compra creada en consola")
                                }}>Crear comprar</button>
                            <button onClick={() => {
                                dispatch(clearBuy())
                            }}
                                className="w-full bg-red-200 rounded-md p-0.75 m-1 "
                            >Limpiar seleccion completa</button>
                        </div>
                    </div> :
                    <div>
                        Sin productos seleccionados
                    </div>
            }
        </div>
    )
}

export default DetailBuy;