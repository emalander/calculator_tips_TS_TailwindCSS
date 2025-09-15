import type { MenuItem } from "../types"

type MenuItemsProps = {
  item: MenuItem,
  addItem: (item:MenuItem) => void
}

export default function MenuItems({ item, addItem }: MenuItemsProps) {
  return (
    <button 
      className="border-2 border-teal-400 w-full p-3 hover:bg-teal-800 hover:text-white hover:font-bold flex justify-between cursor-pointer"
      onClick={()=> addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}
