import type { Dispatch,  SetStateAction} from "react"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]


type TipPercentageProps = {
  setTip: Dispatch<SetStateAction<number>>
  tip: number
}


export default function TipPercentage({setTip, tip}: TipPercentageProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        <div className="bg-amber-300  flex flex-wrap items-center m-2 rounded-lg">
          {tipOptions.map(tipOPtion => (
            <div key={tipOPtion.id} className="flex m-1">
              <label htmlFor={tipOPtion.id}>{tipOPtion.label} </label>
              <input
                id={tipOPtion.id}
                type="radio"
                name="tip"
                value={tipOPtion.value}
                onChange={e => setTip(+e.target.value)}
                checked={tipOPtion.value === tip}
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}
