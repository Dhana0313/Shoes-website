import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 sm:px-8 lg:px-12 mt-12 rounded-t-xl">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} ShoeStore. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer
