import "./app.css"

// -- lessons
import { UseState } from "./lessons/use-state"
import { UseReducer } from "./lessons/use-reducer"
import { UseContext } from "./lessons/use-context"
import { ThemeProvider } from "./theme-context"
import { UseEffect } from "./lessons/use-effect"
import { UsePicture as UsePictureAlt } from "./lessons/use-picture-alt"

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* <UseState /> */}
        {/* <UseReducer /> */}
        {/* <UseContext /> */}
        {/* <UseEffect /> */}
        <UsePictureAlt />
      </div>
    </ThemeProvider>
  )
}

export default App
