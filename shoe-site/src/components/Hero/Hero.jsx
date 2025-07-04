import React from 'react'

function Hero() {
  return (
    <section
        className="relative text-center py-24 sm:py-28 lg:py-36 px-4 bg-cover bg-center bg-no-repeat rounded-b-2xl overflow-hidden"
        style={{ backgroundImage: "url('https://hips.hearstapps.com/hmg-prod/images/mhl-opener-run-shoes-311-67edd9f20e75a.jpg?')" }}
      >
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 rounded-b-2xl"></div>
        <div className="relative z-10 animate-fade-in-up"> 
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Step Up Your <span className="text-blue-300">Style</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Discover the perfect pair for every occasion, combining comfort and cutting-edge design.
          </p>
          <button className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            Shop Our Collection
          </button>
        </div>
      </section>
  )
}

export default Hero
