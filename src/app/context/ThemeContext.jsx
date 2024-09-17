'use client'
import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

const getFromLocalStroge = ()=>{
    if(typeof window !== 'undefined'){
        const value = localStorage.getItem("theme");
        return value || "light"
    }
}

export const ThemeContextProvider = ({children})=>{
const [theme,setTheme]=useState()
useEffect(()=>{
    setTheme(()=>{
        return getFromLocalStroge()
    })
},[])
useEffect(()=>{
    if(typeof window !=="undefined") localStorage.setItem("theme",theme)
},[theme])

const toggle = ()=>{
    setTheme(currentTheme=> currentTheme=='light' ? 'dark' : 'light')
}
  
    return (
        <ThemeContext.Provider value={{theme,toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}


