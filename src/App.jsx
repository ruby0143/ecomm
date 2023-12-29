import Header from "./components/Navbar/Header"
import Login from "./components/Signup/Login"

import Footer from "./components/Footer"
import LoginModalContextProvider from "./Context/ContextProvider"

function App() {


  return (
    <LoginModalContextProvider>
      <Header />
      <Login />
      <Footer />
    </LoginModalContextProvider>
  )
}

export default App
