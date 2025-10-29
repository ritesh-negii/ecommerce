import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
  <>
  <Header/>
  <main className='min-h-[calc(100vh-100px)]'>
    <Outlet/>
  </main>
  <Footer/>
  
  </>
  )
}

export default App

