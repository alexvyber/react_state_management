import { useEffect, useState } from "react"
import { Picture } from "../types"

export const fetchPicture = async (
  date: string,
  setPicture: React.Dispatch<React.SetStateAction<Picture | undefined>>
) => {
  try {
    let res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    )

    setPicture(await res.json())
  } catch (e) {
    console.error(e)
  }
}

export const usePicture = (date: string) => {
  let [picture, setPicture] = useState<Picture>()

  useEffect(() => {
    fetchPicture(date, setPicture)
  }, [date])

  return picture
}
