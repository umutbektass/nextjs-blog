'use client'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeProvider = ({children}) => {
  const {theme} = useContext(ThemeContext)
  console.log("provider theme",theme)
  return (
    <div className={theme}>
        {children}
    </div>
  )
}

export default ThemeProvider;
