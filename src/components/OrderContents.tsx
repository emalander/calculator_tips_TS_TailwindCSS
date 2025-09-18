import type { Dispatch } from "react"
import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem } from "../types"
import type { OrderActions } from "../reducers/order-reducer"


type OrderContentsProps = {
  order: OrderItem[],
  dispatch:Dispatch<OrderActions>
}

export default function OrderContents({ order, dispatch }: OrderContentsProps) {
  return (
    <div>
      <div className="space-y-3 mt-10">
        {order.map(item => (
          <div key={item.id}
            className="flex justify-between border-t items-center border-gray-700 py-5"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}
              </p>
            </div>
            <button className="bg-red-500 h-8 w-8 text-white rounded-full font-black cursor-pointer"
              onClick={() => dispatch({type:'remove-item', payload:{id:item.id}})}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
