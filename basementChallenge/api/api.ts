import { Product } from "../product/types";

const products:Product[] = [{
    "id": "black-tshirt",
    "image": "/products/shirt.png",
    "price": 7.95,
    "name": "Black t-shirt",
    "options": {
      "size": "S",
      "quantity": 1
    }
  }, {
    "id": "black-hoodie",
    "image": "/products/hoodie.png",
    "price": 13,
    "name": "Black hoodie",
    "options": {
      "size": "S",
      "quantity": 1
    }
  }, {
    "id": "black-cap",
    "image": "/products/cap.png",
    "price": 23,
    "name": "Black cap",
    "options": {
      "size": "S",
      "quantity": 1
    }
  }]

export const Api = {
    list:async():Promise<Product[]>=>{
        return products
    }
}