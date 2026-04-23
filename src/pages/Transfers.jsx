import { Link } from 'react-router-dom'
import { FiMapPin, FiClock, FiArrowRight, FiCheck, FiPhone, FiMail } from 'react-icons/fi'
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
    { from: 'Victoria Falls Airport', to: 'Victoria Falls Town', price: 25 },
    { from: 'Victoria Falls Town', to: 'Livingstone (Zambia)', price: 85 },
    { from: 'Victoria Falls', to: 'Hwange National Park', price: 120 },
    { from: 'Victoria Falls', to: 'Chobe (Botswana)', price: 150 },
    { from: 'Victoria Falls', to: 'Kariba', price: 200 },
    { from: 'Victoria Falls', to: 'Great Zimbabwe (Masvingo)', price: 180 }
  ]

  return (
    <div className="min-h-screen bg-stone-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/transfers and logistics.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/50 to-amber-900/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Transfers & <span className="text-gradient">Logistics</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reliable transportation services across Zimbabwe and beyond. Your journey starts here.
          </p>
        </div>
      </section>

      {/* Transfer Services */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Transfer <span className="text-amber-500">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional transportation solutions for every traveler
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {transferServices.map((service, idx) => (
              <div key={idx} className="bg-stone-700/50 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <h4 className="font-semibold text-amber-400 mb-3">What's Included:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <FiCheck className="text-green-500" />
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
      <section className="py-20 bg-stone-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Popular <span className="text-amber-500">Routes</span>
            </h2>
            <p className="text-xl text-gray-400">Competitive pricing for all your transfer needs</p>
          </div>

          <div className="bg-stone-800 rounded-3xl overflow-hidden border border-amber-500/20">
            <div className="grid md:grid-cols-2 gap-6 p-8">
              {popularRoutes.map((route, idx) => (
                <div key={idx} className="flex items-center justify-between bg-stone-700/50 p-4 rounded-xl">
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
                  <div className="text-right">
                    <span className="text-2xl font-bold text-amber-500">${route.price}</span>
                    <span className="text-gray-400 text-sm">/person</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-500 mt-6 text-sm">
            * Prices may vary based on group size, vehicle type, and season. Contact us for exact quotes.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Professional Drivers', desc: 'Experienced, vetted drivers with excellent knowledge of local routes' },
              { title: 'Comfortable Vehicles', desc: 'Modern, air-conditioned vehicles ranging from sedans to luxury coaches' },
              { title: '24/7 Availability', desc: 'Round-the-clock service for airport transfers and emergency needs' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-500">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Book Your Transfer Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us for instant quotes and reliable transportation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@papioafricaadventures.com?subject=Transfer+Booking+Inquiry" className="inline-flex items-center justify-center bg-white text-amber-600 font-bold py-4 px-10 rounded-xl transition-all hover:scale-105">
              <FiMail className="mr-2" /> Email Us
            </a>
            <a href="https://wa.me/263773615333" className="inline-flex items-center justify-center bg-green-500 text-white font-bold py-4 px-10 rounded-xl transition-all hover:scale-105">
              <FaWhatsapp className="mr-2" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}