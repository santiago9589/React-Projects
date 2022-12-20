import { useState } from "react"
import { api } from "../pages/api/api"
import { Item } from "../types/Item"

export const useItems = (): [
    (item: Item) => Promise<void>, (item: Item) => Promise<void>, Item[],
] => {
    const [items, setItems] = useState<Item[]>([])

    const addItems = async (item: Item) => {
        await api.addItems(item).then((res) => {
            setItems([...items, res])
        })
    }

    const deleteItems = async (item: Item) => {
        await api.deleteItems(item).then((res) => {
            const dratf = new Set(items)
            if (dratf.has(res)) {
                dratf.delete(res)
                setItems(Array.from(dratf))
            }
        })
    }

    return [addItems, deleteItems, items]

}