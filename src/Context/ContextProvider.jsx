import React, { useState } from "react";
import LoginModalContext from "./Context";

const LoginModalContextProvider = ({children}) => {
    const [loginDisplayMode, setloginDisplayMode] = React.useState("none")
    const [cartTotal,setTotal] = useState(0);
    return(
        <LoginModalContext.Provider value={{loginDisplayMode, setloginDisplayMode,cartTotal,setTotal}}>
        {children}
        </LoginModalContext.Provider>
    )
}

export default LoginModalContextProvider