import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FiMapPin, FiPhone, FiMail, FiClock, FiCalendar } from 'react-icons/fi'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

export default function Contact() {
  const victoriaFallsLocation = { lat: -17.9244, lng: 25.8572 }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const subject = encodeURIComponent(formData.get('subject'))
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone')}\n\nMessage:\n${formData.get('message')}`
    )
    window.location.href = `mailto:info@papioafricaadventures.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/hero/contact-hero.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 via-stone-900/50 to-amber-900/30" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us to plan your perfect African adventure
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* WhatsApp */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-amber-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaWhatsapp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 text-center">WhatsApp</h3>
              <p className="text-stone-600 text-center mb-4">Quick responses for instant bookings</p>
              <a 
                href="https://wa.me/263773615333" 
                className="block text-center bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all"
              >
                +263773 615 333
              </a>
            </div>

            {/* Email */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-amber-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FiMail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 text-center">Email</h3>
              <p className="text-stone-600 text-center mb-4">For questions and information</p>
              <a 
                href="mailto:info@papioafricaadventures.com"
                className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                info@papioafricaadventures.com
              </a>
            </div>

            {/* Bookings */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-amber-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FiCalendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 text-center">Bookings</h3>
              <p className="text-stone-600 text-center mb-4">Reserve your adventure today</p>
              <a 
                href="mailto:bookings@papioafricaadventures.com"
                className="block text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                bookings@papioafricaadventures.com
              </a>
            </div>
          </div>

          {/* Location & Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-stone-800 mb-6">Visit Us</h2>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="h-80">
                    <MapContainer 
                      center={[victoriaFallsLocation.lat, victoriaFallsLocation.lng]} 
                      zoom={13} 
                      style={{ height: '100%', width: '100%' }}
                    >
                      <TileLayer
                        attribution='&copy; OpenStreetMap'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[victoriaFallsLocation.lat, victoriaFallsLocation.lng]}>
                        <Popup>
                          <div className="text-center">
                            <strong>Papio Africa Adventures</strong>
                            <p>Victoria Falls, Zimbabwe</p>
                          </div>
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiMapPin className="text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-stone-800 mb-1">Location</h3>
                        <p className="text-stone-600">Victoria Falls, Zimbabwe</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiClock className="text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-stone-800 mb-1">Hours</h3>
                        <p className="text-stone-600">24/7 Support Available</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiPhone className="text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-stone-800 mb-1">Phone</h3>
                        <p className="text-stone-600">+263773 615 333</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100">
                <h3 className="text-2xl font-bold text-stone-800 mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    'Local expertise and personalized service',
                    'Over 10 years of experience',
                    'Licensed and insured operator',
                    '24/7 customer support',
                    'Flexible booking and cancellation',
                    'Competitive prices'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-stone-700">
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-stone-800 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-all">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center text-white hover:bg-stone-700 transition-all">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-pink-600 flex items-center justify-center text-white hover:bg-pink-700 transition-all">
                    <FaInstagram />
                  </a>
                  <a href="https://wa.me/263773615333" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-all">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Send Us a Message</h2>
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="+263 77X XXX XXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Subject *</label>
                    <select 
                      name="subject" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Booking Request">Booking Request</option>
                      <option value="Quad Biking">Quad Biking</option>
                      <option value="Safari">Safari</option>
                      <option value="Victoria Falls Tour">Victoria Falls Tour</option>
                      <option value="Transfers">Transfers</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Your Message *</label>
                    <textarea 
                      name="message" 
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                      placeholder="Tell us about your adventure plans..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-600/30"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't wait - the adventure of a lifetime is just a message away
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/263773615333" className="inline-flex items-center justify-center bg-white text-green-700 font-bold py-3 px-8 rounded-xl transition-all hover:scale-105">
              <FaWhatsapp className="mr-2" /> WhatsApp Us
            </a>
            <a href="mailto:bookings@papioafricaadventures.com" className="inline-flex items-center justify-center bg-green-800 text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-105">
              <FiMail className="mr-2" /> Book Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}