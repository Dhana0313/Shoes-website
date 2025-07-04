import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <div className='min-h-screen bg-gray-50 font-sans text-gray-800'>
      <Header />
      <Hero />
      <Products />
      <Footer />
    </div>
  )
}

export default App
