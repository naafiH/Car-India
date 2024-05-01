import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './pages/home'
import Signin from './pages/signIn'
import Signout from './pages/signOut'

export default function App() {
  return (
  <BrowserRouter>
  <Routes>

  <Route path='/' element={<Home/>} />
  <Route path='Sign-in' element={<Signin/>} />
  <Route path='Sign-out' element={<Signout/>} />
  <Route path='/' element={Home} />

  </Routes>
  </BrowserRouter>
  )
}
