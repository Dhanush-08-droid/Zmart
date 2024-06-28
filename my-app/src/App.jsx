import './App.css'
import React, { useEffect, useState } from 'react'
import Counter from './Components/Counter'
import Header from './Components/Header'
import Name from './Components/Name'
import { ThemeContext } from './Context/theme'
import { Countercontext } from './Context/Counter'
import Product from './Components/Product'
import { Outlet } from 'react-router-dom'
// function App() {
//   const name = "john"
//   const age = 30
//   const height = 5
//   const dept = "EIE"
//   return (
//     <>
//       <div>App Component</div>
//       <p>Paragraph</p>
//       <p>name:{name}</p>
//       <p>age:{age}</p>
//       <Name name={name} age={age} height={height} dept={dept} />
//       <Counter/>
//     </>
//   )
// }
// export default App
function App() {
  const [count, setC] = useState(0)
  function Incre() {
    setC(count + 1)
  }
  const [theme, setTheme] = useState('Light')
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  function toggleTheme() {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme, Incre: Incre }}>
        <Countercontext.Provider value={{ count: count, Incre: Incre }}>
          <Header />
          <Outlet/>
        </Countercontext.Provider>
      </ThemeContext.Provider>
    </>
  )
}
export default App