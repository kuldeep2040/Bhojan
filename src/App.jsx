import React, { useState } from 'react'
import Navabar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
   <>
      {showLogin ?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
      <Navabar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path='/order' element={<PlaceOrder></PlaceOrder>} />
      </Routes>
        {/* <AppDownload/> */}
    </div>
      <Footer/>
   </>
  )
}

export default App
