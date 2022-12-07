import { useState } from "react"
import { usePicture } from "../hooks/use-picure-alt"

export const UsePicture = () => {
  const [date, setDate] = useState("2022-12-06")
  let { data: picture, loading, error } = usePicture(date)

  if (error) return <h1>Error: {JSON.stringify(error)}</h1>
  if (loading) return <h1>Loadng...</h1>

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
