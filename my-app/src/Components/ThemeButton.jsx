import React, { useContext } from 'react'
import { ThemeContext } from '../Context/theme'

function ThemeButton() {
  const { theme, toggleTheme, Incre } = useContext(ThemeContext)
  function handleClick() {
    toggleTheme();
    Incre()
  }
  return (

    <button  onClick={handleClick}>{theme}</button>
  )
}
export default ThemeButton