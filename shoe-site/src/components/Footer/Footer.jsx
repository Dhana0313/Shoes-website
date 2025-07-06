import React from 'react'

import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <h3 className="text-lg font-bold">Shoe Mart</h3>
            </div>
            <p className="text-slate-400 text-sm">Premium footwear since 1985</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Products
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-3 mb-2">
              <a
                href="#"
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <div className="flex justify-center md:justify-end space-x-4 text-sm text-slate-400">
              <span className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>(555) 123-4567</span>
              </span>
              <span className="flex items-center space-x-1">
                <Mail className="w-3 h-3" />
                <span>info@shoemart.com</span>
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-6 pt-4 text-center">
          <p className="text-slate-400 text-sm">© 2024 ShoeMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

