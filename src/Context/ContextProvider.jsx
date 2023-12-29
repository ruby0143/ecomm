import React from "react";
import LoginModalContext from "./Context";

const LoginModalContextProvider = ({children}) => {
    const [displayMode, setdisplayMode] = React.useState("none")
    
    return(
        <LoginModalContext.Provider value={{displayMode, setdisplayMode}}>
        {children}
        </LoginModalContext.Provider>
    )
}

export default LoginModalContextProvider