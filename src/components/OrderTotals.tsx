import { useCallback, type Dispatch} from "react";
import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";
import type { OrderActions } from "../reducers/order-reducer";

type OrderTotalsProps = {
  order: OrderItem[],
  tip:number,
  dispatch:Dispatch<OrderActions>
}

export default function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {

  /* const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

  const tipAmount = useMemo(()=> subtotalAmount * tip,[tip, order])
  const totalAmount = useMemo(()=> subtotalAmount + tipAmount,[tip, order]) */  // OPCION useMemo !
  
  const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

  const tipAmount = useCallback(()=> subtotalAmount() * tip,[tip, order])
  const totalAmount = useCallback(()=> subtotalAmount() + tipAmount(),[tip, order])

    return (

      <>
        <div className="space-y-3">
          <h2 className="font-black text-2xl">Totales y propina: </h2>
          <p className="bg-amber-50">Subtotal a pagar: {''}
            <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
          </p>
          <p className="bg-white">Propina: {''}
            <span className="font-bold">{formatCurrency(tipAmount())}</span>
          </p>
          <p className="bg-white">Total a pagar: {''}
            <span className="font-bold">{formatCurrency(totalAmount())}</span>
          </p>
        </div>
        <button 
          className="w-full bg-black p-3 uppercase text-center text-white font-black mt-10 disabled:opacity-10 cursor-pointer"
          disabled={totalAmount()=== 0}
          onClick={()=> dispatch({type: 'place-order'})}
        >
           GUARDAR ORDEN
        </button>
      </>
    )
  
}
