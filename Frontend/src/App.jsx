import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './index.css'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import Signin from '../pages/Signin'
import Sendmoney from '../pages/Sendmoney'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/sendmoney" element={<Sendmoney/>} />

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
