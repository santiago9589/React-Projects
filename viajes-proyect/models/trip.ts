import { Fligth } from "./fligth";

export interface Trip{
    origin : Fligth
    destination: Fligth
    date:Date
    id:string
    price:number
}