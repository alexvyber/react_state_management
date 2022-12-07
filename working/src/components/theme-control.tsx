import { useState } from "react"
import { Theme, useThemeContext } from "../theme-context"

interface ThemeOptions {
  value: Theme
  text: string
}

const options: ThemeOptions[] = [
  { value: "light", text: "light" },
  { value: "dark", text: "dark" },
  { value: "katzen", text: "katzen" },
]

export const ThemeControl = () => {
  let { theme, setTheme } = useThemeContext()

  const [selected, setSelected] = useState<Theme>(options[0].value)

  return (
    <div style={{ padding: "50px 0" }}>
      <h3>Theme: {theme}</h3>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value as Theme)}
      >
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
      <div>
        Change Theme:{" "}
        <button onClick={() => setTheme(selected)}>Set theme</button>
      </div>
    </div>
  )
}
