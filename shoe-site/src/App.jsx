import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'

function App() {
  // Placeholder data for shoes
  const shoes = [
    {
      id: 1,
      name: 'Classic Sneakers',
      price: '$89.99',
      imageUrl: 'https://placehold.co/400x300/E0F2F7/000000?text=Classic+Sneakers',
      description: 'Comfortable and stylish for everyday wear.',
    },
    {
      id: 2,
      name: 'Running Shoes',
      price: '$129.99',
      imageUrl: 'https://placehold.co/400x300/E0F2F7/000000?text=Running+Shoes',
      description: 'Engineered for performance and speed.',
    },
    {
      id: 3,
      name: 'Casual Loafers',
      price: '$75.00',
      imageUrl: 'https://placehold.co/400x300/E0F2F7/000000?text=Casual+Loafers',
      description: 'Relaxed style for a laid-back look.',
    },
    {
      id: 4,
      name: 'Hiking Boots',
      price: '$149.99',
      imageUrl: 'https://placehold.co/400x300/E0F2F7/000000?text=Hiking+Boots',
      description: 'Durable and supportive for outdoor adventures.',
    },
  ];

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
