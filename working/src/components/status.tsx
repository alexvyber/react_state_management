import { useState } from "react"

interface Props {
  onEnter: (value: string) => void
}

export const Status = ({ onEnter }: Props) => {
  const [message, setMessage] = useState<string>("")

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (message && message !== "") {
        onEnter(message)
        setMessage("")
      }
    }
  }

  return (
    <input
      type="text"
      value={message}
      onKeyUp={handleEnter}
      onChange={e => setMessage(e.target.value)}
    />
  )
}
