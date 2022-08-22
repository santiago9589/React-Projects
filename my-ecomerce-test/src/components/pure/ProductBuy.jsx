import React from "react";
import { backBuy } from "../../context/action";

const ProductBuy = ({ product, dispatch, id }) => {

  return (
    <div className="card-buy">
      <div className="card-header-buy">
        <div className="block text-justify">Titulo:{product.title}</div>
        <div className="flex">
          <div className="text-center">ID: {product.id}</div>
          <div className="text-center">Precio: {product.price}</div>
        </div>
      </div>
      <div className="card-body-buy">
        <img className="w-full h-full" src={product.thumbnail} />
      </div>
      <div className="card-footer-buy" >
        <div className="flex justify-around bg-red-500">
          <button onClick={() => {
            dispatch(backBuy(id))
          }}>Quitar del carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ProductBuy