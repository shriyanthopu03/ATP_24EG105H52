import { useContext } from "react"
import { counterContextObj } from "./CounterContextProvider"

function Usercount() {
  const { counter } = useContext(counterContextObj)

  return (
    <div className="mx-auto inline-flex items-center rounded-xl bg-slate-800 px-8 py-4 text-xl font-bold text-white shadow-lg">
      User Count: {counter}
    </div>
  )
}

export default Usercount
