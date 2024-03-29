import Header from "./components/Navbar/Header"
import Footer from "./components/Footer"
import LoginModalContextProvider from "./Context/ContextProvider"
import HomePage from "./components/HomePage"
import Profile from "./components/Profile"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Orders from "./components/Orders"
import Product from "./components/Product"
import Cart from "./components/Cart"
import About from "./components/About"

function App() {


  return (
    <>
      <LoginModalContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About/>} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </Router>

      </LoginModalContextProvider>
    </>

  )
}

export default App
