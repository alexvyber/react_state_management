import { useState } from "react"
import { usePicture } from "../hooks/use-picure"

export const UsePicture = () => {
  const [date, setDate] = useState("2022-12-06")
  let picture = usePicture(date)

  return (
    <main>
      <input
        type="date"
        value={date}
        onChange={({ target }) => setDate(target.value)}
      />
      {picture ? (
        <div>
          <h1>{picture.title}</h1>
          <p>{picture.explanation}</p>
          <img src={picture.url} alt={picture.title} />
        </div>
      ) : (
        <h1>No picture...</h1>
      )}
    </main>
  )
}
