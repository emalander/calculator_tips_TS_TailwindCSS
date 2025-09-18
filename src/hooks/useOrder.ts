import { useState } from "react"

import type {MenuItem, OrderItem} from '../types'

export default function useOrder() {

  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)
  
  const addItem = (item:MenuItem) => {
    
    console.log(item)
    
  }
  
  const removeItem = (id:MenuItem['id'])=> (
    console.log(id)
  )
  
  const placeOrder = () => {
    console.log('Guardando...')
    
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  }
}