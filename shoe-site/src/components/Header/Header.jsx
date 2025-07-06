import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-white shadow-xl py-5 px-6 sm:px-8 lg:px-12 flex justify-between items-center transform transition duration-500  hover:shadow-2xl'>
      {/* Brand/Logo */}
      <h1 className='text-3xl sm:text-4xl font-bold text-indigo-700'>
        Shoe<span className='text-blue-500'>Mart</span>
      </h1>
      {/*Navigation */}
      <nav>
        <ul className='flex space-x-5 sm:space-x-8'>
          <li>
            <NavLink
              className={() => 
                `text-gray-700 hover:text-indigo-600 font-medium transition duration-200 hover:underline underline-offset-4`
              }
            >
             Home 
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shop"
              className={() => 
                `text-gray-700 hover:text-indigo-600 font-medium transition duration-200 hover:underline underline-offset-4`
              }
            >
             Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={() => 
                `text-gray-700 hover:text-indigo-600 font-medium transition duration-200 hover:underline underline-offset-4`
              }
            >
             About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={() => 
                `text-gray-700 hover:text-indigo-600 font-medium transition duration-200 hover:underline underline-offset-4`
              }
            >
             Contact
            </NavLink>
          </li>
            
        </ul>
      </nav>

    </header>
  )
}

export default Header
