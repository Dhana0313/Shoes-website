import React, { useState } from 'react'


const Shop = () => {
  const allShoes = [ // Renamed to allShoes to distinguish from filtered list
  {
    id: 1,
    name: 'Classic Sneakers',
    price: '$89.99',
    imageUrl: 'https://placehold.co/400x300/E0F2F7/000000?text=Classic+Sneakers',
    description: 'Comfortable and stylish for everyday wear.',
    category: 'Sneakers',
    brand: 'BrandA',
  },
  {
    id: 2,
    name: 'Running Shoes',
    price: '$129.99',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/mhl-opener-run-shoes-311-67edd9f20e75a.jpg?crop=0.655xw:0.983xh;0.168xw,0&resize=1120:*',
    description: 'Engineered for performance and speed.',
    category: 'Running',
    brand: 'BrandB',
  },
  {
    id: 3,
    name: 'Casual Loafers',
    price: '$75.00',
    imageUrl: 'https://placehold.co/400x300/E0F2F7/000000?text=Casual+Loafers',
    description: 'Relaxed style for a laid-back look.',
    category: 'Casual',
    brand: 'BrandC',
  },
  {
    id: 4,
    name: 'Hiking Boots',
    price: '$149.99',
    imageUrl: 'https://placehold.co/400x300/E0F2F7/000000?text=Hiking+Boots',
    description: 'Durable and supportive for outdoor adventures.',
    category: 'Boots',
    brand: 'BrandA',
  },
  {
    id: 5,
    name: 'Basketball Shoes',
    price: '$110.00',
    imageUrl: 'https://placehold.co/400x300/E0F2F7/000000?text=Basketball+Shoes',
    description: 'High-performance shoes for the court.',
    category: 'Sneakers',
    brand: 'BrandB',
  },
  {
    id: 6,
    name: 'Formal Dress Shoes',
    price: '$180.00',
    imageUrl: 'https://placehold.co/400x300/E0F2F7/000000?text=Formal+Shoes',
    description: 'Elegant and sophisticated for special occasions.',
    category: 'Formal',
    brand: 'BrandC',
  },
];

  const [filteredShoes, setFilteredShoes] = useState(allShoes);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState('name-asc');

  

  // Get unique categories and brands for filter options
  const categories = ['All', ...new Set(allShoes.map(shoe => shoe.category))];
  const brands = ['All', ...new Set(allShoes.map(shoe => shoe.brand))];

  // Function to apply filters and sorting
  React.useEffect(() => {
    let currentShoes = [...allShoes];

    // Apply category filter
    if (selectedCategory !== 'All') {
      currentShoes = currentShoes.filter(shoe => shoe.category === selectedCategory);
    }

    // Apply brand filter
    if (selectedBrand !== 'All') {
      currentShoes = currentShoes.filter(shoe => shoe.brand === selectedBrand);
    }

    // Apply sorting
    currentShoes.sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      } else if (sortBy === 'price-asc') {
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      } else if (sortBy === 'price-desc') {
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      }
      return 0;
    });

    setFilteredShoes(currentShoes);
  }, [selectedCategory, selectedBrand, sortBy]);


  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
      <h2 className="text-4xl font-bold text-indigo-800 text-center mb-10">Our Shoe Collection</h2>

      {/* Filter and Sort Controls */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-10 flex flex-col sm:flex-row justify-around items-center gap-6">
        {/* Category Filter */}
        <div className="w-full sm:w-auto">
          <label htmlFor="category-filter" className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
          <select
            id="category-filter"
            className="block w-full sm:w-48 bg-gray-100 border border-gray-300 text-gray-800 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Brand Filter */}
        <div className="w-full sm:w-auto">
          <label htmlFor="brand-filter" className="block text-gray-700 text-sm font-bold mb-2">Brand:</label>
          <select
            id="brand-filter"
            className="block w-full sm:w-48 bg-gray-100 border border-gray-300 text-gray-800 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div className="w-full sm:w-auto">
          <label htmlFor="sort-by" className="block text-gray-700 text-sm font-bold mb-2">Sort By:</label>
          <select
            id="sort-by"
            className="block w-full sm:w-48 bg-gray-100 border border-gray-300 text-gray-800 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredShoes.length > 0 ? (
          filteredShoes.map((shoe) => (
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
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-xl py-10">No shoes found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Shop
