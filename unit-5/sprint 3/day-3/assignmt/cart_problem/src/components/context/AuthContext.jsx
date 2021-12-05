import { createContext } from "react-router-dom";
import {useState} from 'react';
export const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const handleCart = ({data})=>{
        setCart(data)
    }
    return <AuthContext.Provider value={{cart,handleCart}}>{children}</AuthContext.Provider>
}