import type { Dispatch } from "react"
import type { MenuItem } from "../types"
import type { OrderActions } from "../reducers/order-reducer"

type MenuItemsProps = {
  item: MenuItem,
  dispatch: Dispatch<OrderActions>
}

export default function MenuItems({ item, dispatch }: MenuItemsProps) {
  return (
    <button 
      className="border-3 border-yellow-400 rounded-tl-xl rounded-br-xl w-full p-3 bg-yellow-100 hover:bg-rose-800 hover:text-white hover:font-bold flex justify-between cursor-pointer"
      onClick={()=> dispatch({type: 'add-item', payload:{item} })}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}
