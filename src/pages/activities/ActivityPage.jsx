import { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiMapPin, FiClock, FiCheck, FiArrowRight, FiStar, FiCalendar, FiX, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { activities } from '../../data/activities'
import { destinations } from '../../data/destinations'

function BookingModal({ activity, pkg, onClose }) {
  const formRef = useRef(null)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      activity: activity.name,
      package: pkg?.name || 'General Inquiry',
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      date: formData.get('date'),
      guests: formData.get('guests'),
      message: formData.get('message')
    }
    const subject = encodeURIComponent(`Booking: ${data.activity} - ${data.package}`)
    const body = encodeURIComponent(
      `Activity: ${data.activity}\nPackage: ${data.package}\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nDate: ${data.date}\nGuests: ${data.guests}\n\nMessage:\n${data.message}`
    )
    window.location.href = `mailto:info@papioafricaadventures.com?subject=${subject}&body=${body}`
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-600">
          <FiX className="w-6 h-6" />
        </button>
        
        <div className="bg-gradient-to-r from-green-700 to-green-900 p-6 rounded-t-3xl">
          <h3 className="text-2xl font-bold text-white">Book {activity.name}</h3>
          {pkg && <p className="text-amber-400">{pkg.name} - ${pkg.price}</p>}
        </div>
        
        <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Full Name *</label>
            <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" placeholder="Your full name" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Email *</label>
              <input required name="email" type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Phone *</label>
              <input required name="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" placeholder="+263..." />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Preferred Date *</label>
              <input required name="date" type="date" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Number of Guests *</label>
              <input required name="guests" type="number" min="1" defaultValue="1" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Special Requests</label>
            <textarea name="message" rows="3" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" placeholder="Any special requirements or questions..." />
          </div>
          
          <button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 rounded-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
            <FiSend /> Send Booking Request
          </button>
        </form>
      </div>
    </div>
  )
}

export default function ActivityPage() {
  const { slug } = useParams()
  const [showModal, setShowModal] = useState(false)
  const [selectedPkg, setSelectedPkg] = useState(null)
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

  const openBooking = (pkg = null) => {
    setSelectedPkg(pkg)
    setShowModal(true)
  }

  const relatedDestinations = destinations.filter(d => 
    d.id === 'victoria-falls' || d.id === 'hwange' || d.id === 'kariba'
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section - With Overlay */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-800 via-green-900 to-green-950">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${activity.heroImage || activity.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-900/50 to-green-800/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-green-900/40" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-green-900/70 backdrop-blur-sm border border-amber-500/30 text-amber-400 font-medium mb-4">
            ADVENTURE ACTIVITY
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 heading-underline">{activity.name}</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">{activity.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Overview & Highlights */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-stone-800 mb-6 heading-underline">Experience the Thrill</h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">{activity.longDescription}</p>
              
              <h3 className="text-xl font-bold text-stone-800 mb-4 heading-decor">What's Included</h3>
              <div className="grid grid-cols-2 gap-4">
                {activity.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-green-200">
                    <FiCheck className="text-green-600 flex-shrink-0" />
                    <span className="text-stone-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info - Green Theme */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-8 border border-amber-500/30 sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-6">Popular Packages</h3>
                
                <div className="space-y-4 mb-8">
                  {activity.packages.slice(0, 2).map((pkg) => (
                    <div key={pkg.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                      <h4 className="font-bold text-white mb-2">{pkg.name}</h4>
                      <div className="flex items-center gap-4 text-gray-300 text-sm mb-3">
                        <span className="flex items-center gap-1"><FiClock /> {pkg.duration}</span>
                        <span className="flex items-center gap-1"><FiMapPin /> {pkg.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-amber-400">${pkg.price}</span>
                          {pkg.parkFees > 0 && <span className="text-gray-400 text-xs block">+ ${pkg.parkFees} park fees</span>}
                        </div>
                        <button onClick={() => openBooking(pkg)} className="text-sm text-white font-medium hover:text-amber-400 transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button onClick={() => openBooking()} className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30">
                  Request Information
                </button>
              </div>
            </div>
          </div>

          {/* Packages Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-6 heading-underline">Available Packages</h2>
            <div className="space-y-6">
              {activity.packages.map((pkg, idx) => (
                <div key={pkg.id} className="grid lg:grid-cols-3 gap-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100 card-3d">
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
                        {pkg.parkFees > 0 && <span className="text-stone-500 text-sm block">+ ${pkg.parkFees} park fees</span>}
                        <span className="text-stone-500 text-sm">/person</span>
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
                        <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 flex flex-col justify-center items-center">
                    <h4 className="font-bold text-stone-800 mb-4 text-center">Ready to Book?</h4>
                    <button onClick={() => openBooking(pkg)} className="w-full mb-3 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105">
                      <FiCalendar className="inline mr-2" /> Book This Package
                    </button>
                    <a href="https://wa.me/263773615333" className="w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center">
                      <FaWhatsapp className="inline mr-2" /> WhatsApp Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials - Green Theme */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-6 heading-underline">What Adventurers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {activity.testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-8 border border-amber-500/30">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-green-400'} />
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Destinations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-6 heading-underline">Where to Experience This</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedDestinations.map((dest) => (
                <Link key={dest.id} to={`/destinations/${dest.slug}`} className="group">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg card-3d">
                    <img 
                      src={dest.image} 
                      alt={dest.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 image-3d-hover"
                      onError={(e) => e.target.src = 'https://placehold.co/400x300/d97706/white?text=Destination'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent" />
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
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your {activity.name} Adventure?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to book your {activity.name.toLowerCase()} experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => openBooking()} className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-105">
                <FiCalendar className="mr-2" /> Book Now
              </button>
              <a href="https://wa.me/263773615333" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-105">
                <FaWhatsapp className="mr-2" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {showModal && <BookingModal activity={activity} pkg={selectedPkg} onClose={() => setShowModal(false)} />}
    </div>
  )
}