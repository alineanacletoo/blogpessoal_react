import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/home/login/Login";



function App() {
  

  return (
   <>
  <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
   </BrowserRouter> 
   </>
     
  )
}

export default App
