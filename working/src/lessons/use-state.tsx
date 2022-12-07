import { useState } from "react"
import { Status } from "../components/status"

export const UseState = () => {
  const [messages, setMessages] = useState<string[]>([])

  return (
    <>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <Status onEnter={value => setMessages([value, ...messages])} />
    </>
  )
}
