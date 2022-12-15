import { Product } from "../types/product"
import { User } from "../types/user"

export const api = {
    users: async (): Promise<User> => {
        return Promise.resolve({
            "id": "5a03638052fd231590d04eb5",
            "name": "John Kite",
            "points": 2000,
            "redeemHistory": [],
            "createDate": "new Date(1510171520852)"
        })
    },

    addCoins: async (amout:number): Promise<number> =>{
        return Promise.resolve(amout)
    },
    products:async():Promise<Product[]>=>{
        return Promise.resolve([
            {
              "_id": "5a033eeb364bf301523e9b92",
              "name": "Sandalia Pale Gold YSL",
              "cost": 200,
              "category": "Indumentaria",
              "img": {
                "url": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
                "hdUrl": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png"
              }
            },
            {
              "_id": "5a033f0f364bf301523e9b93",
              "name": "iPhone 7 Case Sea-Blue",
              "cost": 200,
              "category": "Accesorios",
              "img": {
                "url": "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
                "hdUrl": "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
              }
            }
          ])
    }
}