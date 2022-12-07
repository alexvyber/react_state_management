import { useEffect, useState } from "react"

// --

type Picture = {
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

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
