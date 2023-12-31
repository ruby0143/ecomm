import Header from "./components/Navbar/Header"


import Footer from "./components/Footer"
import LoginModalContextProvider from "./Context/ContextProvider"
import HomePage from "./components/HomePage"
import Product from "./components/Product"

function App() {


  return (
    <LoginModalContextProvider>

    <Header/>
    <Product/>
    <Footer/>
    </LoginModalContextProvider>
  )
}

export default App
