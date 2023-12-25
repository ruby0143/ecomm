import React from "react";
import LoginModalContext from "./Context";

const LoginModalContextProvider = ({children}) => {
    const [displayMode, setdisplayMode] = React.useState("none")
    const [user, setUser] = React.useState('');
    return(
        <LoginModalContext.Provider value={{displayMode, setdisplayMode,user,setUser}}>
        {children}
        </LoginModalContext.Provider>
    )
}

export default LoginModalContextProvider