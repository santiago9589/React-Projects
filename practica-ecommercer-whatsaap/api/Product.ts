import { Product } from "../models/Product"
import axios from "axios"
import { Request } from "../models/Request"

export const api = {
    list:async(query:Request["query"]):Promise<Product[]>=>{

        const url : Request["url"] = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
        
            const resquest = await axios.get(url)  
            const data = resquest.data.results

            const products = data.reduce((products:Product[],product:any)=>{
                products.push({
                    id:product.id,
                    title:product.title,
                    img:product.thumbnail,
                    price:parseFloat(product.price)
                })

                return products
            },[])

            return products

    }
}