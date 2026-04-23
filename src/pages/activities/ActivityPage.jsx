import { useParams, Link } from 'react-router-dom'
import { FiMapPin, FiClock, FiCheck, FiArrowRight, FiStar, FiCalendar } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { activities } from '../../data/activities'
import { destinations } from '../../data/destinations'

export default function ActivityPage() {
  const { slug } = useParams()
  const activity = activities.find(a => a.slug === slug)
  
  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">Activity Not Found</h1>
          <Link to="/" className="text-amber-600 hover:underline">Return Home</Link>
        </div>
      </div>
    )
  }

  const relatedDestinations = destinations.filter(d => 
    d.id === 'victoria-falls' || d.id === 'hwange' || d.id === 'kariba'
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${activity.heroImage || activity.image}')` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 via-stone-900/50 to-amber-900/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 text-amber-400 font-medium mb-4">
            ADVENTURE ACTIVITY
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">{activity.name}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{activity.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Overview & Highlights */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Experience the Thrill</h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">{activity.longDescription}</p>
              
              <h3 className="text-xl font-bold text-stone-800 mb-4">What's Included</h3>
              <div className="grid grid-cols-2 gap-4">
                {activity.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                    <FiCheck className="text-green-600 flex-shrink-0" />
                    <span className="text-stone-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100 sticky top-24">
                <h3 className="text-2xl font-bold text-stone-800 mb-6">Popular Packages</h3>
                
                <div className="space-y-4 mb-8">
                  {activity.packages.slice(0, 2).map((pkg) => (
                    <div key={pkg.id} className="bg-white rounded-2xl p-4 shadow-md">
                      <h4 className="font-bold text-stone-800 mb-2">{pkg.name}</h4>
                      <div className="flex items-center gap-4 text-stone-500 text-sm mb-3">
                        <span className="flex items-center gap-1"><FiClock /> {pkg.duration}</span>
                        <span className="flex items-center gap-1"><FiMapPin /> {pkg.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-amber-600">${pkg.price}</span>
                        <a 
                          href={`mailto:info@papioafricaadventures.com?subject=Booking+${pkg.name}`}
                          className="text-sm text-green-600 font-medium hover:underline"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/about/contact" className="block">
                  <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Request Information
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Packages Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Available Packages</h2>
            <div className="space-y-6">
              {activity.packages.map((pkg) => (
                <div key={pkg.id} className="grid lg:grid-cols-3 gap-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-stone-800 mb-2">{pkg.name}</h3>
                        <div className="flex items-center gap-4 text-stone-500">
                          <span className="flex items-center gap-2"><FiClock /> {pkg.duration}</span>
                          <span className="flex items-center gap-2"><FiMapPin /> {pkg.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-4xl font-bold text-amber-600">${pkg.price}</span>
                        <span className="text-stone-500">/person</span>
                      </div>
                    </div>
                    
                    <p className="text-stone-600 mb-6">{pkg.description}</p>
                    
                    <h4 className="font-bold text-stone-800 mb-3">Package Includes:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.included.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-stone-600">
                          <FiCheck className="text-green-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="font-bold text-stone-800 mb-3 mt-4">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map((hl, idx) => (
                        <span key={idx} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 flex flex-col justify-center items-center">
                    <h4 className="font-bold text-stone-800 mb-4 text-center">Ready to Book?</h4>
                    <a 
                      href={`mailto:info@papioafricaadventures.com?subject=Booking+Inquiry:+${pkg.name}`}
                      className="w-full mb-3 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
                    >
                      <FiCalendar className="inline mr-2" /> Book This Package
                    </a>
                    <a 
                      href="https://wa.me/263773615333"
                      className="w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
                    >
                      <FaWhatsapp className="inline mr-2" /> WhatsApp Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Experience Gallery</h2>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 4000 }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="rounded-3xl overflow-hidden"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SwiperSlide key={num}>
                  <div className="h-64 md:h-80 bg-stone-200 relative overflow-hidden">
                    <img 
                      src={`/assets/images/activities/${activity.id}-${num}.jpg`}
                      alt={`${activity.name} ${num}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600 text-2xl font-bold">Image ${num}</div>`
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">What Adventurers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {activity.testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-stone-800">{testimonial.name}</p>
                      <p className="text-stone-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Destinations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Where to Experience This</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedDestinations.map((dest) => (
                <Link key={dest.id} to={`/destinations/${dest.slug}`} className="group">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={dest.image} 
                      alt={dest.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => e.target.src = 'https://placehold.co/400x300/d97706/white?text=Destination'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold">{dest.name}</h3>
                      <span className="text-sm text-gray-300 flex items-center gap-1"><FiMapPin /> {dest.region}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your {activity.name} Adventure?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to book your {activity.name.toLowerCase()} experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`mailto:info@papioafricaadventures.com?subject=${activity.name}+Booking+Inquiry`} className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-xl transition-all">
                <FiCalendar className="mr-2" /> Book Now
              </a>
              <a href="https://wa.me/263773615333" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl transition-all">
                <FaWhatsapp className="mr-2" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}