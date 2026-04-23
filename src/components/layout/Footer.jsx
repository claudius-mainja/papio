import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaHeart, FaMountain, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa'
import { SiCashapp } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src="/assets/images/logo.png" 
                alt="Papio Africa Adventures" 
                className="h-20 w-auto mb-4"
                onError={(e) => e.target.src = 'https://placehold.co/200x80/d97706/white?text=Papio+Africa'}
              />
              <p className="text-sm text-gray-400">
                Designed & Developed by{' '}
                <a href="https://www.claudius-mainja.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">
                  Claudius Mainja
                </a>
                <br />
                Maintained by{' '}
                <a href="https://www.blacklemur.co.zw" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">
                  Blacklemur Innovations
                </a>
              </p>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Your premier tourism partner in Zimbabwe, offering unforgettable experiences 
              from amusement parks to exclusive wilderness adventures. With over 10 years 
              of expertise, we deliver seamless, complete solutions for every traveler.
            </p>

            {/* Payment Methods */}
            <div className="bg-black/40 p-6 rounded-2xl border border-amber-500/30">
              <h4 className="text-lg font-semibold mb-4 text-amber-400 flex items-center">
                <span className="mr-3">We Accept</span>
              </h4>
              <div className="flex flex-wrap gap-3">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold text-white">
                  <FaCcVisa className="text-2xl" />
                  <span className="text-sm">VISA</span>
                </div>
                <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold text-white">
                  <FaCcMastercard className="text-2xl" />
                  <span className="text-sm">Mastercard</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold text-white">
                  <FaCcPaypal className="text-2xl" />
                  <span className="text-sm">PayPal</span>
                </div>
                <div className="bg-gradient-to-r from-green-600 to-green-700 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold text-white">
                  <FaPhone className="text-xl" />
                  <span className="text-xs">Bank Transfer</span>
                </div>
                <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold text-white">
                  <SiCashapp className="text-xl" />
                  <span className="text-xs">Cash</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-black/30 p-6 rounded-2xl border border-amber-500/20 backdrop-blur-sm">
            <h4 className="text-xl font-semibold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about/our-story' },
                { name: 'Destinations', path: '/destinations/victoria-falls' },
                { name: 'Activities', path: '/activities/quadbiking' },
                { name: 'Style of Travel', path: '/about/style-of-travel' },
                { name: 'Contact', path: '/about/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-amber-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-black/30 p-6 rounded-2xl border border-amber-500/20 backdrop-blur-sm">
            <h4 className="text-xl font-semibold mb-6 text-amber-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-amber-500 mt-1 mr-3" />
                <span className="text-gray-300">Victoria Falls, Zimbabwe</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-amber-500 mr-3" />
                <a href="tel:+263773615333" className="text-gray-300 hover:text-amber-400">+263773 615 333</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-amber-500 mr-3" />
                <a href="mailto:info@papioafricaadventures.com" className="text-gray-300 hover:text-amber-400 text-sm">info@papioafricaadventures.com</a>
              </div>
              <div className="flex items-center">
                <FaClock className="text-amber-500 mr-3" />
                <span className="text-gray-300">24/7 Support</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-stone-700 flex items-center justify-center hover:bg-stone-600 transition-all">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition-all">
                <FaInstagram />
              </a>
              <a href="https://wa.me/263773615333" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center hover:bg-green-700 transition-all">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-amber-500/20 pt-8">
          <div className="bg-black/20 p-6 rounded-2xl border border-amber-500/30 backdrop-blur-sm">
            <div className="text-center">
              <p className="text-gray-400 text-lg mb-2">
                &copy; {new Date().getFullYear()} Papio Africa Adventures. All rights reserved.
              </p>
              <p className="text-amber-400 font-semibold text-xl">
                <FaHeart className="inline text-red-500 mr-2" />
                Creating memories that last a lifetime.
                <FaMountain className="inline ml-2 text-amber-500" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}