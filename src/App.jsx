import Header from "./components/Navbar/Header"
import Login from "./components/Signup/Login"

import Footer from "./components/Footer"
import LoginModalContextProvider from "./Context/ContextProvider"
import HomePage from "./components/HomePage"

function App() {


  return (
    <LoginModalContextProvider>
    <Header/>
    <Login />
    <HomePage/>
    <Footer/>
    </LoginModalContextProvider>
  )
}

export default App
