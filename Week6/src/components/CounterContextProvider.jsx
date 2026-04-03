import { createContext, useState } from "react"

export const counterContextObj=createContext()

function CounterContextProvider({ children }) {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  return (
    <counterContextObj.Provider value={{ counter, increment }}>
      {children}
    </counterContextObj.Provider>
  )
}

export default CounterContextProvider