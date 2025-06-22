"use client"

import { Leaf, Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
export default function Footer() {

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full mr-3">
                <div className="text-center">
                  <Leaf className="h-6 w-6 text-white mx-auto mb-1" />
                  <div className="text-white text-xs font-bold leading-none">
                    <div>green</div>
                    <div>line</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-lg font-bold">Greenline</div>
                <div className="text-sm text-gray-400">Young Plants</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for high-quality young plants and seedlings. Cultivating excellence in every leaf.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company" className="text-gray-400 hover:text-white transition-colors">
                  Our Company
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/varieties" className="text-gray-400 hover:text-white transition-colors">
                  Varieties
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-400 hover:text-white transition-colors">
                  Research & Development
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-gray-400 hover:text-white transition-colors">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/vegetables" className="text-gray-400 hover:text-white transition-colors">
                  Vegetable Seedlings
                </Link>
              </li>
              <li>
                <Link href="/products/flowers" className="text-gray-400 hover:text-white transition-colors">
                  Flower Young Plants
                </Link>
              </li>
              <li>
                <Link href="/products/herbs" className="text-gray-400 hover:text-white transition-colors">
                  Herb Varieties
                </Link>
              </li>
              <li>
                <Link href="/products/ornamentals" className="text-gray-400 hover:text-white transition-colors">
                  Ornamental Plants
                </Link>
              </li>
              <li>
                <Link href="/products/custom" className="text-gray-400 hover:text-white transition-colors">
                  Custom Growing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  123 Growing Lane
                  <br />
                  Plant City, PC 12345
                  <br />
                  Netherlands
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+31 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@greenlineplants.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Greenline Young Plants. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
