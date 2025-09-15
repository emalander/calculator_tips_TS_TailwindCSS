import { formatCurrency } from "../helpers";

export default function OrderTotals() {
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propina: </h2>
        <p className="bg-amber-50">Subtotal a pagar: {''}
          <span className="font-bold">{formatCurrency(0)}</span>
        </p>
        <p className="bg-amber-100">Propina: {''}
          <span className="font-bold">{formatCurrency(0)}</span>
        </p>
        <p className="bg-amber-200">Total a pagar: {''}
          <span className="font-bold">{formatCurrency(0)}</span>
        </p>
      </div>
      <button>

      </button>
    </>
  )
}
