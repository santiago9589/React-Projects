import { Product } from "./product";

export interface User{
    id: string,
  name:string,
  points: number,
  redeemHistory: Product[],
  createDate: string
}