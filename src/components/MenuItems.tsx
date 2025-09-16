import type { MenuItem } from "../types"

type MenuItemsProps = {
  item: MenuItem,
  addItem: (item:MenuItem) => void
}

export default function MenuItems({ item, addItem }: MenuItemsProps) {
  return (
    <button 
      className="border-3 border-yellow-400 rounded-tl-xl rounded-br-xl w-full p-3 bg-yellow-100 hover:bg-rose-800 hover:text-white hover:font-bold flex justify-between cursor-pointer"
      onClick={()=> addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}
