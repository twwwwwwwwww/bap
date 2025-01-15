import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductAll from './Page/ProductAll'
import Login from './Page/Login'
import ProductDetail from './Page/ProductDetail'
import Navbar from './component/Navbar'
import PrivateRoute from './route/PrivateRoute'
import "./App.css"



function App() {
  const [loginok, setLoginok] = useState(false);

  useEffect(() => {
    console.log(loginok)
  }, [loginok])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login setLoginok={setLoginok} />} />
        <Route path='/product/:id' element={<PrivateRoute loginok={loginok} />} />
      </Routes>

    </div>
  )
}

export default App

