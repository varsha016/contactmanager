import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import MyNavbar from './componants/MyNavbar'
import Account from './pages/Account'
import Addcontact from './pages/Addcontact'
import AdminOnly from './pages/AdminOnly'
import Dashboard from './pages/Dashboard'

import Home from './pages/Home'
import Login from './pages/Login'
import LoginOnly1 from './pages/LoginOnly1'



import PageNotFound from './pages/PageNotFound'
import Register from './pages/Regester'


export default function App() {

  return <BrowserRouter>
    <MyNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<AdminOnly element={<Dashboard />} />} />
      <Route path='/addcontact' element={<LoginOnly1 element={<Addcontact />} />} />
      <Route path='/account' element={<LoginOnly1 element={<Account />} />} />

      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
}