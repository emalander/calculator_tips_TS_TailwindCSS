import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const {order, addItem, removeItem} = useOrder()

  return (
    <>
      <header className="bg-teal-500 py-3">
        <h1 className="text-center text-4xl font-black">Calculator Tips</h1>
      </header>
      <main className="bg-red-100 max-w-6xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-center text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItems key={item.id}
                item={item}
                addItem={addItem}
              >

              </MenuItems>
            ))}
          </div>
        </div>
        <div className="border border-dashed border-salte-300 p-5 rounded-lg space-y-10">
          <OrderContents
            order={order}
            removeItem={removeItem}
          />
          <OrderTotals
            
          />
        </div>
      </main>
    </>
  )
}

export default App
