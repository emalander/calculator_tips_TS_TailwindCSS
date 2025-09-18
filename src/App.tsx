import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import { menuItems } from "./data/db"
import TipPercentage from "./components/TipPercentage"
import { useReducer } from "react"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {

  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className="bg-rose-900 py-3">
        <h1 className="text-white text-center text-4xl font-black">Pizza & Co.</h1>
      </header>
      <main className="bg-rose-400 max-w-6xl mx-auto py-20 grid md:grid-cols-2 gap-1">
        <div className="p-5">
          <h2 className="text-center text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItems 
                key={item.id}
                item={item}
                dispatch={dispatch}
              >

              </MenuItems>
            ))}
          </div>
        </div>
        <div className="p-5">
          <h2 className="text-center font-black text-4xl">Consumo</h2>
          <div className="bg-red-100 border-4 border-dashed border-salte-300 p-5 rounded-lg space-y-3 mt-10">
            {state.order.length > 0 ? (
              <>
                <OrderContents
                  order={state.order}
                  dispatch={dispatch}
                />
                <div className="border-t-2 border-rose-800"></div>
                <TipPercentage
                  tip={state.tip}
                  dispatch={dispatch}
                />
                <div className="border-t-2 border-rose-800"></div>
                <OrderTotals
                  order={state.order}
                  tip={state.tip}
                  dispatch={dispatch}
                />
              </>
            ): (
              <p className="text-center">La orden esta vacia</p> 
            )}

          </div>
        </div>
      </main>
    </>
  )
}

export default App
