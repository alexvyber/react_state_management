import { useState } from "react"
import { useStorage } from "../hooks/use-storage"

export const UseStorage = () => {
  let [count, setCount] = useStorage<number>("key", 0)
  const [count2, setCount2] = useState(0)

  return (
    <main>
      <h1>count: {count}</h1>
      <h1>count: {count2}</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button
          onClick={() => {
            setCount2(count2 + 1)
          }}
        >
          Click!
        </button>
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          Click!
        </button>
      </div>
    </main>
  )
}
