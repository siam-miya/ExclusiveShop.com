import React from 'react'
import Topbar from '../components/Topbar'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const mainLayout = () => {
  return (
   <main>
    <Topbar/>
    <Navbar/>
    <Outlet/>
    <Footer/>
   </main>
  )
}

export default mainLayout
