import { useEffect } from "react"

export const useComplete = (completedRequest: (...args: any) => any) => {
  useEffect(() => {
    completedRequest("test data")
  }, [completedRequest])
}
