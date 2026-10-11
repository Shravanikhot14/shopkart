import { createContext, useState } from "react";

// step 1-create context
export const LoginContext=createContext()


// step 2- provide data to context
export const LoginContextProvider=({children}) => {

    const [user, setUser]=useState(
        localStorage.getItem("user")
    )

    const login=(data)=>{
        localStorage.setItem("user", data)
        setUser(data)
    }

    const logout=()=>{
        localStorage.clear()
        setUser(null)
    }

    const isLoggedIn=user ? true : false;

    return <LoginContext.Provider value={{user,login,logout,isLoggedIn}}>
        {children}
    </LoginContext.Provider>

}