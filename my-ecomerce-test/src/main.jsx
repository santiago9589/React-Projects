import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import ProductContextProvider from "./context/productContextProvider"

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </BrowserRouter>
  
)
