import { useState } from "react"
import { Product } from "../api/product"



export type filters = null | ((product: Product) => boolean)

export const useFilters = () => {
    const [filters, setFilters] = useState<Record<string, filters>>({
        color: null,
        price: null,
        raiting: null
    })

    const handleChangeColors = (filter: filters) => {
        setFilters((filters) => ({ ...filters, color: filter }))
    }

    const handleChangeRaiting = (filter: filters) => {
        setFilters((filters) => ({ ...filters, raiting: filter }))
    }

    const handleChangePrice = (filter: filters) => {
        setFilters((filters) => ({ ...filters, price: filter }))
    }

    return {
        filters, setFilters, handleChangeColors, handleChangePrice, handleChangeRaiting
    }
}