import React, { createContext, useContext, useState } from "react"
import type { SetStateAction, Dispatch } from "react"

export type Theme = "light" | "dark" | "katzen"

interface DefaultValue {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

const defaultValue: DefaultValue = {
  theme: "light",
  setTheme() {},
}

const ThemeContext = createContext(defaultValue)

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeProvider = ({
  children,
}: React.PropsWithChildren<unknown>): JSX.Element => {
  let [theme, setTheme] = useState<Theme>("light")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
