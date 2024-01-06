import React, { useState } from "react";
import LoginModalContext from "./Context";

const LoginModalContextProvider = ({children}) => {
    const [loginDisplayMode, setloginDisplayMode] = React.useState("none")
    
    return(
        <LoginModalContext.Provider value={{loginDisplayMode, setloginDisplayMode}}>
        {children}
        </LoginModalContext.Provider>
    )
}

export default LoginModalContextProvider