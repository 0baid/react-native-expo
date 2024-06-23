import React, { createContext, useContext, useEffect, useState } from "react";
import { ContextInterface } from "@/constants/types";
import { getCurrentUser } from "@/lib/appwrite";

const initialContext: ContextInterface = {
    isLoading: false,
    isLoggedIn: false,
    user: null
}

const GlobalContext = createContext(initialContext)

export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [value, setValue] = useState(initialContext)
    const [user ,setUser] = useState<any | null>(null)
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)
    useEffect(() => {
        getCurrentUser().then((res) => {
            if (res) {
                
                setIsLoggedIn(true)
                setUser(res)
            } else {
                setIsLoggedIn(false)
                setUser(null)
                
            }
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setValue({...value,isLoading:false})
            setIsLoading(false)
        })
    }, [])
    return (
        <GlobalContext.Provider value={{
            user,isLoading,isLoggedIn,setIsLoading,setIsLoggedIn,setUser
        }}>
            {children}
        </GlobalContext.Provider>

    )
}