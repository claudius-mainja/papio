import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { FiMapPin, FiClock, FiArrowRight, FiStar, FiSearch, FiFilter } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { destinations } from '../data/destinations'
import { activities } from '../data/activities'

const heroImages = [
  '/assets/images/hero-1.png',
  '/assets/images/hero-2.png',
  '/assets/images/hero-3.png',
  '/assets/images/hero-4.png',
  '/assets/images/hero-5.png',
]

export default function Home() {
  const heroRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterDestination, setFilterDestination] = useState('')
  const [filterActivity, setFilterActivity] = useState('')
  const [filterDuration, setFilterDuration] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const hero = heroRef.current
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.4}px) scale(${1 - scrolled * 0.0005})`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const featuredQuadbike = activities.find(a => a.id === 'quadbiking')
  const quadbikePackages = featuredQuadbike?.packages || []

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesActivity = !filterActivity || activity.id === filterActivity
    return matchesSearch && matchesActivity
  })

  const featuredActivities = activities.slice(0, 6)
  const featuredDestinations = destinations.slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-800 via-green-900 to-green-950">
        {/* Background Images with 3D Effect */}
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${idx === currentSlide ? 'opacity-60 scale-110' : 'opacity-0 scale-100'}`}
              style={{ 
                backgroundImage: `url('${img}')`,
                transform: idx === currentSlide ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 1.5s ease-in-out'
              }}
            />
          ))}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-900/50 to-green-800/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-green-900/40" />
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-float-3d" />
        <div className="absolute bottom-32 left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float-3d" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl animate-float-3d" style={{ animationDelay: '4s' }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center hero-content-3d">
          <div className="mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center gap-3 bg-green-900/70 backdrop-blur-md rounded-full px-6 py-3 border border-amber-500/30">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-amber-400 font-semibold tracking-wide">LET'S EXPLORE ZIMBABWE</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <span className="text-white">Experience</span>
            <br />
            <span className="text-amber-500 heading-decor">Africa's Heart</span>
            <br />
            <span className="text-3xl md:text-5xl font-medium text-white mt-4 block">Like Never Before</span>
          </h1>

          <div className="max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed bg-green-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              From the thunderous Victoria Falls to the majestic Big Five, embark on unforgettable adventures that connect you with Zimbabwe's wild beauty and rich heritage.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            {['Victoria Falls Adventures', 'Big Five Safaris', 'Cultural Heritage'].map((feature, idx) => (
              <div key={idx} className="bg-green-900/60 backdrop-blur-md border border-amber-500/20 px-6 py-3 text-gray-100 flex items-center gap-2 rounded-xl">
                <span className={idx === 0 ? 'text-blue-400' : idx === 1 ? 'text-amber-500' : 'text-purple-400'}>●</span>
                {feature}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
            <Link to="/activities/quadbiking">
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-600/30 animate-glow">
                Start Your Adventure
              </button>
            </Link>
            <Link to="/destinations/victoria-falls">
              <button className="bg-green-900/70 backdrop-blur-md border-2 border-white/30 text-white font-semibold py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:bg-white/10">
                View Packages
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm text-white opacity-0 animate-fade-in-up" style={{ animationDelay: '1.3s' }}>
            <div className="flex items-center gap-2">
              <FiStar className="text-yellow-400 text-lg" />
              <span>5.0 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs">✓</span>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-xs">+</span>
              <span>1000+ Happy Travelers</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="bg-green-900/70 backdrop-blur-md rounded-full p-3">
            <FiArrowRight className="w-6 h-6 text-white rotate-90" />
          </div>
        </div>
      </section>

      {/* Animated Quadbike Prices Marquee */}
      <section className="py-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <div className="inline-flex items-center gap-8">
            {quadbikePackages.map((pkg) => (
              <span key={pkg.id} className="inline-flex items-center gap-2 text-white font-bold">
                <span className="bg-white text-amber-700 px-3 py-1 rounded-lg text-sm">{pkg.name}</span>
                <span className="text-2xl">From</span>
                <span className="text-3xl font-black">${pkg.price}</span>
                <span className="text-lg">/person</span>
                <span className="mx-4">|</span>
              </span>
            ))}
            <span className="inline-flex items-center gap-2 text-white font-bold">
              <span className="bg-white text-amber-700 px-3 py-1 rounded-lg text-sm">Quad Biking 1-Hour</span>
              <span className="text-2xl">From</span>
              <span className="text-3xl font-black">$60</span>
              <span className="text-lg">/person</span>
              <span className="mx-4">|</span>
            </span>
            <span className="inline-flex items-center gap-2 text-white font-bold">
              <span className="bg-white text-amber-700 px-3 py-1 rounded-lg text-sm">Quad Biking 2-Hour</span>
              <span className="text-2xl">From</span>
              <span className="text-3xl font-black">$120</span>
              <span className="text-lg">/person</span>
              <span className="mx-4">|</span>
            </span>
            <span className="inline-flex items-center gap-2 text-white font-bold">
              <span className="bg-green-700 px-3 py-1 rounded-lg text-sm">Safari Adventures</span>
              <span className="text-2xl">From</span>
              <span className="text-3xl font-black">$135</span>
              <span className="text-lg">/person</span>
              <span className="mx-4">|</span>
            </span>
            <span className="inline-flex items-center gap-2 text-white font-bold">
              <span className="bg-green-700 px-3 py-1 rounded-lg text-sm">River Cruises</span>
              <span className="text-2xl">From</span>
              <span className="text-3xl font-black">$75</span>
              <span className="text-lg">/person</span>
              <span className="mx-4">|</span>
            </span>
            <span className="inline-flex items-center gap-2 text-white font-bold">
              <span className="bg-blue-700 px-3 py-1 rounded-lg text-sm">Helicopter Flights</span>
              <span className="text-2xl">From</span>
              <span className="text-3xl font-black">$202</span>
              <span className="text-lg">/person</span>
            </span>
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>

      {/* Filter/Search Section */}
      <section className="py-12 bg-gradient-to-r from-green-700 via-green-800 to-green-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-amber-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <FiFilter className="text-amber-500" /> Find Your Adventure
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Search</label>
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search destinations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Destination</label>
                <select 
                  value={filterDestination}
                  onChange={(e) => setFilterDestination(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-amber-500 focus:outline-none"
                >
                  <option value="" className="text-gray-800">All Destinations</option>
                  {destinations.map(d => (
                    <option key={d.id} value={d.id} className="text-gray-800">{d.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Activity</label>
                <select 
                  value={filterActivity}
                  onChange={(e) => setFilterActivity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-amber-500 focus:outline-none"
                >
                  <option value="" className="text-gray-800">All Activities</option>
                  {activities.map(a => (
                    <option key={a.id} value={a.id} className="text-gray-800">{a.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Duration</label>
                <select 
                  value={filterDuration}
                  onChange={(e) => setFilterDuration(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-amber-500 focus:outline-none"
                >
                  <option value="" className="text-gray-800">Any Duration</option>
                  <option value="short" className="text-gray-800">Half Day</option>
                  <option value="full" className="text-gray-800">Full Day</option>
                  <option value="multi" className="text-gray-800">Multi-Day</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Quadbike Section */}
      <section className="py-20 bg-gradient-to-br from-green-700 via-green-800 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/assets/images/QuadbikeHero.png')" }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 font-medium mb-4">
              FEATURED ADVENTURE
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 heading-underline">
              <span className="text-amber-500 heading-decor">Quad Biking</span> Thrills
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the wild beauty of Victoria Falls on four wheels. Our quad biking adventures offer thrills, scenery, and unforgettable memories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {quadbikePackages.map((pkg, idx) => (
              <div 
                key={pkg.id}
                className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 card-3d"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img 
                    src={idx === 0 ? '/assets/images/QB1.png' : '/assets/images/QB2.png'} 
                    alt={pkg.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 image-3d-hover"
                    onError={(e) => e.target.src = 'https://placehold.co/600x400/d97706/white?text=Quad+Biking'}
                  />
                  <div className="absolute top-4 right-4 z-20 bg-amber-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                    {pkg.duration}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-3">{pkg.name}</h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">{pkg.description}</p>

                  <div className="flex items-center gap-4 mb-6 text-stone-500">
                    <div className="flex items-center gap-2">
                      <FiClock />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin />
                      <span>{pkg.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-4xl font-bold text-amber-600">${pkg.price}</span>
                      <span className="text-stone-500 text-sm">/person</span>
                    </div>
                    <a 
                      href="mailto:info@papioafricaadventures.com?subject=Quad+Biking+Booking"
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/activities/quadbiking" className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-amber-400 transition-colors">
              View All Quadbike Packages <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Activities */}
      <section className="py-20 bg-gradient-to-br from-green-800 via-green-900 to-green-950 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 text-9xl text-amber-600">✦</div>
          <div className="absolute bottom-20 right-20 text-9xl text-amber-600">✦</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 heading-underline">
              Trending <span className="text-amber-500 heading-decor">Adventures</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Embark on extraordinary journeys that create lifelong memories
            </p>
          </div>

          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {featuredActivities.map((activity) => (
              <SwiperSlide key={activity.id}>
                <Link to={`/activities/${activity.slug}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border-2 border-transparent hover:border-amber-500 transition-all duration-500 hover:-translate-y-2 group card-3d">
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent z-10" />
                      <img 
                        src={activity.image} 
                        alt={activity.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 image-3d-hover"
                        onError={(e) => e.target.src = 'https://placehold.co/400x300/d97706/white?text=Adventure'}
                      />
                      {activity.packages && activity.packages[0] && (
                        <div className="absolute top-4 right-4 z-20 bg-amber-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                          From ${activity.packages[0].price}
                        </div>
                      )}
                      <div className="absolute bottom-6 left-6 z-20 text-white">
                        <div className="flex items-center gap-2 text-sm">
                          <FiStar className="text-yellow-400" />
                          <span className="font-semibold">4.9</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{activity.name}</h3>
                      <p className="text-gray-300 text-sm line-clamp-2">{activity.description}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Featured Destinations - Gray-100 Background */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 heading-underline">
              Explore Our <span className="text-amber-600 heading-decor">Destinations</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Discover the wonders of Zimbabwe from Victoria Falls to the Eastern Highlands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((dest, idx) => (
              <Link to={`/destinations/${dest.slug}`} key={dest.id}>
                <div className="group relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 card-3d">
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 image-3d-hover"
                    onError={(e) => e.target.src = 'https://placehold.co/400x500/d97706/white?text=Destination'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">{dest.description}</p>
                    <div className="flex items-center gap-2 mt-3 text-amber-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <FiArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/destinations/victoria-falls">
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                View All Destinations
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-green-800 via-green-900 to-green-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 heading-underline">
              What Our <span className="text-amber-500 heading-decor">Travelers Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real experiences from adventurers who trusted us with their African journey
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {destinations.map((dest) => dest.testimonial && (
              <SwiperSlide key={dest.id}>
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-amber-500/20 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={i < dest.testimonial.rating ? 'text-yellow-400' : 'text-gray-500'} />
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 leading-relaxed">"{dest.testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold">
                      {dest.testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{dest.testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{dest.testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Why Choose Us - Moved After Testimonials */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-950 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 text-9xl text-amber-600">✦</div>
          <div className="absolute bottom-20 right-20 text-9xl text-amber-600">✦</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 heading-underline">
              Why Choose <span className="text-amber-500 heading-decor">Papio Africa</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the difference of traveling with Zimbabwe's premier tourism partner
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: '10+ Years Experience',
                desc: 'Established in 2014, we have years of expertise creating unforgettable African adventures for travelers from around the world.'
              },
              {
                icon: '🛡️',
                title: 'Licensed & Insured',
                desc: 'Fully licensed tourism operator with comprehensive insurance coverage for your peace of mind throughout your journey.'
              },
              {
                icon: '⭐',
                title: '5-Star Reputation',
                desc: 'Consistently rated 5 stars by hundreds of satisfied travelers on TripAdvisor and Google reviews.'
              },
              {
                icon: '🚐',
                title: 'Modern Fleet',
                desc: 'Our fleet of well-maintained vehicles ensures comfortable and safe transportation across Zimbabwe.'
              },
              {
                icon: '🌍',
                title: 'Local Experts',
                desc: 'Our passionate team of local guides know every corner of Zimbabwe and share authentic cultural insights.'
              },
              {
                icon: '💬',
                title: '24/7 Support',
                desc: 'Round-the-clock customer support to assist you before, during, and after your adventure.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 group card-3d">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors heading-decor">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/assets/images/hero/cta-bg.jpg')" }} />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Book your African adventure today and discover the wild side of Zimbabwe with Papio Africa Adventures
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@papioafricaadventures.com?subject=Booking+Inquiry">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Book Your Adventure Now
              </button>
            </a>
            <Link to="/about/contact">
              <button className="border-2 border-white text-white font-semibold py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:bg-white hover:text-green-700">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}