import { useCallback, useState } from "react"
import { useComplete } from "../hooks/use-complete"

export const UseComplete = () => {
  const [clicked, setClicked] = useState(false)

  const completeCallback = useCallback(
    () => (data: string) => console.log(data),
    []
  )

  // useComplete((data: string) => console.log(data)) // logs every click on component state change
  useComplete(completeCallback) // never logs

  return (
    <main>
      <h2>Hey, {clicked ? "Katzen" : "Gato"}!</h2>
      <button onClick={() => setClicked(!clicked)}>Click!</button>
    </main>
  )
}
