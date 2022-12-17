import React from 'react'
import { Items } from '../types/Items'

interface props{
    item : Items
}

const ItemCard = ({item}:props) => {
  return (
    <p>{item.name}</p>
  )
}

export default ItemCard