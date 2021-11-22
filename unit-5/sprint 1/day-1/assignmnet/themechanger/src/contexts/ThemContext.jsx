import { createContext, useState } from "react";

export const ThemContext = createContext()

export const ThemContextProvider = ({children}) =>{
    const [color , setColor] = useState("white");
    const handleTokenChange=()=>{
          setColor(color === "black" ? "white" : "black")
    }
    return <ThemContext.Provider value={{color,handleTokenChange}}>
    {children}
    </ThemContext.Provider>
}