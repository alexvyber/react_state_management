import { useEffect, useState } from "react"

export const useStorage = <T>(key: string, initailState: T) => {
  const [state, setState] = useState(initailState)

  useEffect(() => {
    let existingState = localStorage.getItem(key)
    if (existingState) setState(JSON.parse(existingState))
  }, [key])

  const handleChangeState = (state: T) => {
    setState(state), localStorage.setItem(key, JSON.stringify(state))
  }
  return [state, handleChangeState] as const
}
