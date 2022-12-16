import { Product } from "../types/product"
import { User } from "../types/user"
import axios from "axios"

const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliYjNmODU2NDAxYTAwMjEwZjdjNDciLCJpYXQiOjE2NzExNDg1MzZ9.Dxqs7prukUpHu4aztPzYXNl7bQsGqKzAVXIAtbgnPNA"

export const api = {
  users: async (): Promise<User> => {

    const response = await axios({
      method: "GET",
      baseURL: 'https://coding-challenge-api.aerolab.co/user/me',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    })

    return response.data
  },

  addCoins: async (amount: number): Promise<number> => {

    const response = await axios({
      method: "POST",
      baseURL: 'https://coding-challenge-api.aerolab.co/user/points',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      data: {
        amount
      }
    })

    let values: Array<number> = Object.values(response.data)
    
    return values[1]
  },
  products: async (): Promise<Product[]> => {
    const response = await axios({
      method: "GET",
      baseURL: 'https://coding-challenge-api.aerolab.co/products',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    })

    return response.data
  },
  buyProduct: async (product: Product): Promise<string> => {

    const response = await axios({
      method: "POST",
      baseURL: 'https://coding-challenge-api.aerolab.co/redeem',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      data: {
        productId:product._id
      }
    })

    return response.data.message
  },
  getHistory : async():Promise<Product[]>=>{

    const response = await axios({
      method: "GET",
      baseURL: 'https://coding-challenge-api.aerolab.co/user/history',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    })

    return response.data
  }
}