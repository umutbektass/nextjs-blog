'use client'
import { createContext, useState } from "react";


export const ThemeContext = createContext();

const getFromLocalStroge = ()=>{
    if(typeof window !== 'undefined'){
        const value = localStorage.getItem("theme");
        return value || "light"
    }
}

export const ThemeContextProvider = ({children})=>{
const [theme,setTheme]=useState(()=>{return getFromLocalStroge()})
    return (
        <ThemeContext.Provider value={{theme}}>
            {children}
        </ThemeContext.Provider>
    )
}


