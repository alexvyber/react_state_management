import { useMemo } from "react"
import type { Picture } from "../types"
import { useNetowrk } from "./use-network"

export const usePictureWithMemo = (date: string) => {
  let options = useMemo(
    () => ({
      method: "GET",
      headers: { name: "alice" },
      url: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    }),
    [date]
  )
  const { data, loading, error } = useNetowrk<Picture>(options)

  return { data, loading, error }
}
