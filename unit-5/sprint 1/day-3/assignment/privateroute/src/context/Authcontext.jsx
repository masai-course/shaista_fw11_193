import { createContext, useState } from "react";
export const AuthContext = createContext()
export const AuthContextProvider =({children})=>{
    const [token,setToken]= useState("");
    const handleChange =(newToken)=>{
        setToken(newToken);
    }
    return (
        <AuthContext.Provider value ={{token, handleChange}}>
        {children}</AuthContext.Provider>
    )
}