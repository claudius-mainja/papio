import { Link } from 'react-router-dom'
import { FiMapPin, FiClock, FiArrowRight, FiCheck, FiPhone, FiMail, FiStar } from 'react-icons/fi'
import { FaWhatsapp, FaBus, FaPlane, FaHotel } from 'react-icons/fa'

export default function Transfers() {
  const transferServices = [
    {
      icon: <FaPlane className="w-8 h-8" />,
      title: 'Airport Transfers',
      description: 'Seamless transfers from Victoria Falls International Airport to your hotel or lodge.',
      includes: ['Flight monitoring', 'Meet & greet service', 'Luggage assistance', 'Private & shared options']
    },
    {
      icon: <FaBus className="w-8 h-8" />,
      title: 'Inter-Hotel Transfers',
      description: 'Comfortable transfers between hotels, lodges, and camping sites across Zimbabwe.',
      includes: ['Door-to-door service', 'Scenic routes', 'Professional drivers', 'Stopovers available']
    },
    {
      icon: <FaHotel className="w-8 h-8" />,
      title: 'City Tours',
      description: 'Explore Victoria Falls town and surrounding areas with our guided city transfers.',
      includes: ['Flexible itineraries', 'Local guide option', 'Shopping trips', 'Restaurant transfers']
    },
    {
      icon: <FaWhatsapp className="w-8 h-8" />,
      title: 'Cross-Border Transfers',
      description: 'Transfers to Livingstone (Zambia), Chobe (Botswana), and other border crossings.',
      includes: ['Visa assistance info', 'Border crossing support', 'Multiple destinations', 'Day trips']
    }
  ]

  const popularRoutes = [
    { from: 'Victoria Falls Airport', to: 'Victoria Falls Town' },
    { from: 'Victoria Falls Town', to: 'Livingstone (Zambia)' },
    { from: 'Victoria Falls', to: 'Hwange National Park' },
    { from: 'Victoria Falls', to: 'Chobe (Botswana)' },
    { from: 'Victoria Falls', to: 'Kariba' },
    { from: 'Victoria Falls', to: 'Great Zimbabwe (Masvingo)' }
  ]

  const testimonials = [
    { name: 'Sarah Thompson', location: 'UK', rating: 5, text: 'Excellent transfer service! Driver was waiting at the airport with a sign. Very professional.' },
    { name: 'Michael Chen', location: 'Singapore', rating: 5, text: 'Smooth cross-border transfer to Chobe. Everything was well organized. Highly recommend!' },
    { name: 'Emma Wilson', location: 'Australia', rating: 5, text: 'Great communication and reliable service. The vehicle was clean and comfortable.' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Green Background with Gradient Overlay */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-800 via-green-900 to-green-950">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/transfers and logistics.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-800/60 to-green-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 via-transparent to-green-800/60" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Transfers & <span className="text-amber-500">Logistics</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Reliable transportation services across Zimbabwe and beyond. Your journey starts here.
          </p>
        </div>
      </section>

      {/* Transfer Services */}
      <section className="py-20 bg-gradient-to-br from-green-800 via-green-900 to-green-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Transfer <span className="text-amber-500">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional transportation solutions for every traveler
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {transferServices.map((service, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <h4 className="font-semibold text-amber-400 mb-3">What's Included:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <FiCheck className="text-green-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-950 to-green-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Popular <span className="text-amber-500">Routes</span>
            </h2>
            <p className="text-xl text-gray-300">Popular transfer routes we offer</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-amber-500/20">
            <div className="grid md:grid-cols-2 gap-6 p-8">
              {popularRoutes.map((route, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-white font-medium">
                      <FiMapPin className="text-amber-500" />
                      <span>{route.from}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <FiArrowRight className="rotate-90" />
                      <span>{route.to}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-500 mt-6 text-sm">
            * Contact us for pricing on any route. Quotes provided upon request.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-green-800 via-green-900 to-green-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="text-amber-500">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-amber-500/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-500'} />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed">"{testimonial.text}"</p>
<div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-600/30 border border-amber-500/50" />
                    <div>
                      <p className="font-semibold text-white">{testimonial.name.split(' ')[0]} {testimonial.name.split(' ')[1]?.charAt(0)}.</p>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-green-700 via-green-800 to-green-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Professional Drivers', desc: 'Experienced, vetted drivers with excellent knowledge of local routes' },
              { title: 'Comfortable Vehicles', desc: 'Modern, air-conditioned vehicles ranging from sedans to luxury coaches' },
              { title: '24/7 Availability', desc: 'Round-the-clock service for airport transfers and emergency needs' }
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-amber-500/20">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-500">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Book Your Transfer Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us for instant quotes and reliable transportation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@papioafricaadventures.com?subject=Transfer+Booking+Inquiry" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-xl transition-all hover:scale-105">
              <FiMail className="mr-2" /> Email Us
            </a>
            <a href="https://wa.me/263773615333" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-xl transition-all hover:scale-105">
              <FaWhatsapp className="mr-2" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}