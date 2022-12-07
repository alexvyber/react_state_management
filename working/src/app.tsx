import "./app.css"

// -- lessons
import { UseState } from "./lessons/use-state"
import { UseReducer } from "./lessons/use-reducer"
import { UseContext } from "./lessons/use-context"
import { ThemeProvider } from "./theme-context"
import { UseEffect } from "./lessons/use-effect"

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* <UseState /> */}
        {/* <UseReducer /> */}
        {/* <UseContext /> */}
        <UseEffect />
      </div>
    </ThemeProvider>
  )
}

export default App
