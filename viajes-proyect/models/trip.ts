import { Fligth } from "./fligth";

export interface Trip{
    origin : Fligth
    destination: Fligth
    days:number
    id:string
    price:number
}