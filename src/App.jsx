// import { theme, ThemeContext } from "./contexts/ThemeContext";

// function App() {
//   const theme = 'dark';
//   return <Parent theme={theme} />;
// }

// function Parent({ theme }) {
//   return <Child theme={theme} />;
// }

// function Child({ theme }) {
//   return <Button theme={theme} />;
// }

// function Button({ theme }) {
//   return <button style={{ background: theme === 'dark' ? 'black' : 'white' }}>Click me</button>;
// }

// export default App

import { useState } from "react"
import { ThemeContext, themes } from "./contexts/ThemeContext.js"
import Navbar from "./components/Navbar"
import Button from "./components/Button"

const App = () => {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    setTheme(state => (state === themes.light ? themes.dark : themes.light))
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Navbar />
        <Button changeTheme={toggleTheme} />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
