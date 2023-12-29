import Header from "./components/Navbar/Header"


import Footer from "./components/Footer"
import LoginModalContextProvider from "./Context/ContextProvider"
import HomePage from "./components/HomePage"

function App() {


  return (
    <LoginModalContextProvider>
    <Header/>
    
    <HomePage/>
    <Footer/>
    </LoginModalContextProvider>
  )
}

export default App
