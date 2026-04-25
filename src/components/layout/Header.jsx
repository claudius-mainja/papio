import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const navLinks = {
  destinations: [
    { name: 'Victoria Falls', path: '/destinations/victoria-falls' },
    { name: 'Hwange', path: '/destinations/hwange' },
    { name: 'Masvingo', path: '/destinations/masvingo' },
    { name: 'Kariba', path: '/destinations/kariba' },
    { name: 'Nyanga', path: '/destinations/nyanga' },
    { name: 'Gweru', path: '/destinations/gweru' },
    { name: 'Harare', path: '/destinations/harare' },
  ],
  activities: [
    { name: 'Quadbiking', path: '/activities/quadbiking' },
    { name: 'Safari', path: '/activities/safari' },
    { name: 'River', path: '/activities/river' },
    { name: 'Air', path: '/activities/air' },
    { name: 'Adrenaline', path: '/activities/adrenaline' },
    { name: 'Tours', path: '/activities/tour' },
    { name: 'Animal Interactions', path: '/activities/animal-interactions' },
    { name: 'Cultural', path: '/activities/cultural' },
    { name: "Devil's Pool", path: '/activities/devils-pool' },
  ],
  about: [
    { name: 'Our Story', path: '/about/our-story' },
    { name: 'Style of Travel', path: '/about/style-of-travel' },
    { name: 'Contact Us', path: '/about/contact' },
  ]
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdowns, setDropdowns] = useState({})
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setDropdowns({})
  }, [location])

  const toggleDropdown = (key) => {
    setDropdowns(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-manrope">
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-green-800 via-green-900 to-green-800 py-2 border-b border-amber-500/20">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:info@papioafricaadventures.com" className="flex items-center gap-2 text-gray-200 hover:text-amber-400 transition-colors text-sm">
              <FiMail className="text-amber-500" />
              <span>info@papioafricaadventures.com</span>
            </a>
            <a href="tel:+263773615333" className="flex items-center gap-2 text-gray-200 hover:text-amber-400 transition-colors text-sm">
              <FiPhone className="text-amber-500" />
              <span>+263773 615 333</span>
            </a>
            <Link to="/activities-prices" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-lg transition-colors text-sm font-semibold">
              <span>View Our Activity Prices</span>
              <FiArrowRight size={14} />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-200 hover:bg-blue-600 hover:text-white transition-all">
              <FaFacebookF size={12} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-200 hover:bg-black hover:text-white transition-all">
              <FaTwitter size={12} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-200 hover:bg-pink-600 hover:text-white transition-all">
              <FaInstagram size={12} />
            </a>
            <a href="https://wa.me/263773615333" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-200 hover:bg-green-600 hover:text-white transition-all">
              <FaWhatsapp size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - White Glassmorphism */}
      <nav className={`transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-white/60 backdrop-blur-sm'}`}>
        <div className="max-w-8xl mx-auto px-6 lg:px-10 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="h-12 lg:h-16">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Papio Africa Adventures" 
                  className="h-full w-auto"
                  onError={(e) => e.target.src = 'https://placehold.co/200x80/d97706/white?text=Papio+Africa'}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link 
                to="/" 
                className={`px-4 py-2 font-semibold transition-all rounded-lg font-unbounded ${location.pathname === '/' ? 'text-amber-600 bg-amber-50' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50/50'}`}
              >
                Home
              </Link>

              {/* Destinations Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => toggleDropdown('destinations')}
                  className="flex items-center px-4 py-2 font-semibold text-gray-700 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50/50 font-unbounded"
                >
                  Destinations
                  <FiChevronDown className={`ml-1 transition-transform ${dropdowns.destinations ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-0 mt-2 w-56 bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl border border-amber-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${dropdowns.destinations ? 'opacity-100 visible' : ''}`}>
                  {navLinks.destinations.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Activities Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => toggleDropdown('activities')}
                  className="flex items-center px-4 py-2 font-semibold text-gray-700 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50/50 font-unbounded"
                >
                  Activities
                  <FiChevronDown className={`ml-1 transition-transform ${dropdowns.activities ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl border border-amber-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${dropdowns.activities ? 'opacity-100 visible' : ''}`}>
                  {navLinks.activities.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/transfers" 
                className="px-4 py-2 font-semibold text-gray-700 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50/50 font-unbounded"
              >
                Transfers & Logistics
              </Link>

              {/* About Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => toggleDropdown('about')}
                  className="flex items-center px-4 py-2 font-semibold text-gray-700 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50/50 font-unbounded"
                >
                  About Us
                  <FiChevronDown className={`ml-1 transition-transform ${dropdowns.about ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl border border-amber-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${dropdowns.about ? 'opacity-100 visible' : ''}`}>
                  {navLinks.about.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Book Now Button */}
              <Link to="/about/contact" className="ml-2">
                <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-2.5 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 font-unbounded">
                  Book Now
                </button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-0 bg-white z-40 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-24 p-6 space-y-4 overflow-y-auto h-full">
          <Link to="/" className="block py-3 text-gray-800 font-semibold border-b border-gray-100">Home</Link>
          
          <div className="border-b border-gray-100">
            <button onClick={() => toggleDropdown('mdestinations')} className="flex justify-between items-center w-full py-3 font-semibold text-gray-800">
              Destinations
              <FiChevronDown className={`transition-transform ${dropdowns.mdestinations ? 'rotate-180' : ''}`} />
            </button>
            {dropdowns.mdestinations && (
              <div className="pl-4 space-y-2 pb-3">
                {navLinks.destinations.map(item => (
                  <Link key={item.path} to={item.path} className="block py-2 text-gray-600">{item.name}</Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-gray-100">
            <button onClick={() => toggleDropdown('mactivities')} className="flex justify-between items-center w-full py-3 font-semibold text-gray-800">
              Activities
              <FiChevronDown className={`transition-transform ${dropdowns.mactivities ? 'rotate-180' : ''}`} />
            </button>
            {dropdowns.mactivities && (
              <div className="pl-4 space-y-2 pb-3">
                {navLinks.activities.map(item => (
                  <Link key={item.path} to={item.path} className="block py-2 text-gray-600">{item.name}</Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/transfers" className="block py-3 font-semibold text-gray-800 border-b border-gray-100">Transfers & Logistics</Link>

          <div className="border-b border-gray-100">
            <button onClick={() => toggleDropdown('mabout')} className="flex justify-between items-center w-full py-3 font-semibold text-gray-800">
              About Us
              <FiChevronDown className={`transition-transform ${dropdowns.mabout ? 'rotate-180' : ''}`} />
            </button>
            {dropdowns.mabout && (
              <div className="pl-4 space-y-2 pb-3">
                {navLinks.about.map(item => (
                  <Link key={item.path} to={item.path} className="block py-2 text-gray-600">{item.name}</Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about/contact" className="block">
            <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 rounded-lg mt-4 font-unbounded">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}