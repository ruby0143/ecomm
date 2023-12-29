import React from "react";
import LoginModalContext from "./Context";

const LoginModalContextProvider = ({children}) => {
    const [displayMode, setdisplayMode] = React.useState("none")
    const [userContext, setUserContext] = React.useState('');
    return(
        <LoginModalContext.Provider value={{displayMode, setdisplayMode,userContext,setUserContext}}>
        {children}
        </LoginModalContext.Provider>
    )
}

export default LoginModalContextProvider