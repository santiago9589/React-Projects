import React from "react";
import { startBuy, startModify, backBuy } from "../../context/action";
import { useNavigate } from "react-router-dom";



const Product = ({ product, dispatch }) => {

  const navigate = useNavigate()


  return (
    <div className="card-product">
      <div className="card-header-product">
        <div className="block text-justify">Nombre:{product.title}</div>
        <div className="flex">
          <div className="text-center">ID: {product.id}</div>
          <div className="text-center">Precio: {product.price}</div>
        </div>
      </div>
      <div className="card-body-product">
        <img className="w-full h-full" src={product.thumbnail} />
      </div>
      <div className="card-footer-product" >
        <div className="flex justify-around">
          <button onClick={() => {
            navigate(`/modify/${product.id}`)
            dispatch(startModify(product.id))
          }}
            className="w-20 bg-blue-200 rounded-md p-0.75 m-1">Detalles</button>
        </div>
        <div className="flex justify-center">
          <button onClick={() => {
            dispatch(startBuy(product))
          }}
            className="w-20 bg-green-200 rounded-md p-0.75 m-1">Agregar</button>
        </div>

      </div>
    </div>

  )

}


export default Product