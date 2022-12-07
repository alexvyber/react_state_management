import { useDarkMode } from "../hooks/use-dark-mode"

export const UseEffect = () => {
  let isDarkMode = useDarkMode()
  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        color: isDarkMode ? "red" : "purple",
        backgroundColor: !isDarkMode ? "green" : "blue",
        display: "flex",
        justifyItems: "center",
        justifyContent: "center",
        fontSize: "60px"
      }}
    >
      <h4>Some text</h4>
    </div>
  )
}
