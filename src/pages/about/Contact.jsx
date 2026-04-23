import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail, FiClock, FiCalendar } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

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
      {/* Hero Section - Green Background with Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-800 via-green-900 to-green-950">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/hero/contact-hero.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-900/50 to-green-800/70" />
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 heading-underline">
            Contact <span className="text-amber-500 heading-decor">Us</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Get in touch with us to plan your perfect African adventure
          </p>
        </div>
      </section>

      {/* Contact Cards Only */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-green-100 card-3d">
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
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-amber-100 card-3d">
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
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-blue-100 card-3d">
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

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
        </div>
      </section>
    </div>
  )
}