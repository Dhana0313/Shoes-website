import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Products from '../Products/Products'
import Footer from '../Footer/Footer'

function Home() {
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
    <div>
      <div className='min-h-screen bg-gray-50 font-sans text-gray-800'>
        
        <Hero />
        <Products />
        
      </div>
    </div>
  )
}

export default Home
