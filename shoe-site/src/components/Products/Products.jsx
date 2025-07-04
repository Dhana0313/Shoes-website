import React from 'react'

function Products() {
  // Placeholder data for shoes
  const shoes = [
    {
      id: 1,
      name: 'Classic Sneakers',
      price: '$89.99',
      imageUrl: 'https://images.unsplash.com/photo-1627909293599-6d152a7fb4e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Comfortable and stylish for everyday wear.',
    },
    {
      id: 2,
      name: 'Running Shoes',
      price: '$129.99',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eeb7432c-4791-47cd-b11e-613692a09395/NIKE+STRUCTURE+26.png',
      description: 'Engineered for performance and speed.',
    },
    {
      id: 3,
      name: 'Casual Loafers',
      price: '$75.00',
      imageUrl: 'https://cdnimg.brunomarc.com/thumbnail/432x432/brunomarc/product/product/2024-08-22/2297/03:39--BROWN-1.jpg',
      description: 'Relaxed style for a laid-back look.',
    },
    {
      id: 4,
      name: 'Hiking Boots',
      price: '$149.99',
      imageUrl: 'https://www.tentmaster.lk/wp-content/uploads/2024/04/A686d5910cc514f699884ec95f4488a1bH.jpeg',
      description: 'Durable and supportive for outdoor adventures.',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <h3 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-10">Our Latest Collection</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {shoes.map((shoe) => (
            <div key={shoe.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={shoe.imageUrl}
                alt={shoe.name}
                className="w-full h-48 object-cover rounded-t-xl"
               
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x300/E0F2F7/000000?text=Image+Error`; }}
              />
              <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{shoe.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{shoe.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-700">{shoe.price}</span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Products
