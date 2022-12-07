import type { Picture } from "../types"
import { useNetowrk } from "./use-network"

export const usePicture = (date: string) => {
  const { data, loading, error } = useNetowrk<Picture>({
    url: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`,
  })

  return { data, loading, error }
}
