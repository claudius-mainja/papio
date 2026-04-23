import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { FiMapPin, FiClock, FiArrowRight, FiStar } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { destinations } from '../data/destinations'
import { activities } from '../data/activities'

const heroImages = [
  '/assets/images/VicFallshero.png',
  '/assets/images/QuadbikeHero.png',
  '/assets/images/safarihero.png',
  '/assets/images/riverhero.png',
  '/assets/images/tourhero.png',
  '/assets/images/hero-5.png',
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const hero = heroRef.current
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const featuredQuadbike = activities.find(a => a.id === 'quadbiking')
  const quadbikePackages = featuredQuadbike?.packages || []

  const featuredActivities = activities.slice(0, 6)
  const featuredDestinations = destinations.slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <div 
              key={idx}
              className="absolute inset-0 bg-cover bg-center opacity-0 animate-fade-in"
              style={{ 
                backgroundImage: `url('${img}')`,
                animationDelay: `${idx * 2}s`,
                animationFillMode: 'forwards'
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/50 to-amber-900/40" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center gap-3 bg-stone-900/50 backdrop-blur-md rounded-full px-6 py-3 border border-amber-500/30">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-amber-400 font-semibold tracking-wide">LET'S EXPLORE ZIMBABWE</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <span className="text-white">Experience</span>
            <br />
            <span className="text-gradient">Africa's Heart</span>
            <br />
            <span className="text-3xl md:text-5xl font-medium text-white mt-4 block">Like Never Before</span>
          </h1>

          <div className="max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed bg-stone-900/50 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              From the thunderous Victoria Falls to the majestic Big Five, embark on unforgettable adventures that connect you with Zimbabwe's wild beauty and rich heritage.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            {['Victoria Falls Adventures', 'Big Five Safaris', 'Cultural Heritage'].map((feature, idx) => (
              <div key={idx} className="glass-card px-6 py-3 text-gray-200 flex items-center gap-2">
                <span className={idx === 0 ? 'text-blue-400' : idx === 1 ? 'text-amber-500' : 'text-purple-400'}>●</span>
                {feature}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
            <Link to="/activities/quadbiking">
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-600/30">
                Start Your Adventure
              </button>
            </Link>
            <Link to="/destinations/victoria-falls">
              <button className="glass-card border-2 border-white/30 text-white font-semibold py-4 px-10 rounded-xl text-lg backdrop-blur-md transition-all duration-300 hover:bg-white/10">
                View Packages
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
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
          <div className="glass-card rounded-full p-3">
            <FiArrowRight className="w-6 h-6 text-white rotate-90" />
          </div>
        </div>
      </section>

      {/* Featured Quadbike Section */}
      <section className="py-20 bg-gradient-to-br from-green-700 via-green-800 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/assets/images/hero/quadbike-hero.jpg')" }} />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-amber-500 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-amber-500/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-amber-500/70 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 font-medium mb-4">
              FEATURED ADVENTURE
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              <span className="text-amber-500">Quad Biking</span> Thrills
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the wild beauty of Victoria Falls on four wheels. Our quad biking adventures offer thrills, scenery, and unforgettable memories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {quadbikePackages.map((pkg, idx) => (
              <div 
                key={pkg.id}
                className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img 
                    src={idx === 0 ? '/assets/images/QB1.png' : '/assets/images/QB2.png'} 
                    alt={pkg.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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
      <section className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 text-9xl text-amber-600">✦</div>
          <div className="absolute bottom-20 right-20 text-9xl text-amber-600">✦</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trending <span className="text-amber-500">Adventures</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                  <div className="bg-stone-800/50 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border-2 border-transparent hover:border-amber-500 transition-all duration-500 hover:-translate-y-2 group">
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent z-10" />
                      <img 
                        src={activity.image} 
                        alt={activity.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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
                      <p className="text-gray-400 text-sm line-clamp-2">{activity.description}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Our <span className="text-amber-500">Destinations</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the wonders of Zimbabwe from Victoria Falls to the Eastern Highlands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((dest, idx) => (
              <Link to={`/destinations/${dest.slug}`} key={dest.id}>
                <div className="group relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => e.target.src = 'https://placehold.co/400x500/d97706/white?text=Destination'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2">{dest.description}</p>
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
              <button className="btn-primary">
                View All Destinations
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-stone-800 via-stone-900 to-stone-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="text-amber-500">Travelers Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={`text-${i < dest.testimonial.rating ? 'yellow' : 'gray'}-400`} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{dest.testimonial.text}"</p>
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