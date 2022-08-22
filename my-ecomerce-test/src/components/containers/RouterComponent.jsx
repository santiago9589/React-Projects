import React from "react";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext"
import DetailBuyPage from "../../pages/DetailBuyPage";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage";
import ListProductsPage from "../../pages/ListProductsPage";
import LoginPage from "../../pages/LoginPage";
import ModifyProductPage from "../../pages/ModifyProduct";

const RouterComponent = () => {

    const { state } = useContext(ProductContext)
    const { productsToBuy, productSelected,isUser } = state

    return (
        <div className="flex w-3/5 h-full space-y-3 flex-wrap overflow-scroll
            sm:w-full sm:2/4 sm:justify-center sm:items-center">
            <Routes>
                <Route exact path="/" 
                    element={isUser ? <HomePage /> : <LoginPage />} />
                <Route path="/list" 
                    element={isUser ? <ListProductsPage /> : <LoginPage />} />
                <Route path="/detailbuy"
                    element={ isUser ? <DetailBuyPage /> : <LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/modify/:id"
                    element={productSelected ? <ModifyProductPage /> :
                        <ListProductsPage />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </div>

    )
}

export default RouterComponent;